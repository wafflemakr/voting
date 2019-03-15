import abi from "./abi";

let contract;
var userAcc;
let totalCandidates;
let web3js;

export function launch() {
  let address = "0x167ab0464E4e66e35B2cC7b92545aE86805F4F7C";
  contract = new web3js.eth.Contract(abi, address);

  setInterval(function() {
    web3.eth.getAccounts((err, account) => {
      if (account[0] !== userAcc) {
        userAcc = account[0];
        candidateCount();
      }
    });
  }, 1000);

  contract.events
    .Voted()
    .on("data", function(event) {
      let candidate = event.returnValues;
      candidateInfo(candidate._candidateId).then(Candidate => {
        console.log("New vote for: ", Candidate.name);
        $("#candidateResult").empty();
        candidateCount();
      });
    })
    .on("error", console.error);

  //Return All votes registered
  contract
    .getPastEvents("Voted", { fromBlock: 0, toBlock: "latest" })
    .then(function(events) {
      console.log(events);
    });
}

export function refresh() {
  updateUI();
  $("#txState").empty();
}

function updateUI() {
  $("#voter").empty();
  $("#voter").append(`<div class="voterAddr">
        <p>Voting from: ${userAcc}</p>`);

  $("#candidateResult").empty();
  $("#candidateSelection").empty();
  $("#txState").empty();

  for (let i = 1; i <= totalCandidates; i++) {
    candidateInfo(i).then(candidate => {
      $("#candidateResult").append(
        "<tr><th>" +
          candidate.id +
          "</th><td>" +
          candidate.name +
          "</td><td>" +
          candidate.voteCount +
          "</td></tr>"
      );
      $("#candidateSelection").append(
        "<option value='" + candidate.id + "' >" + candidate.name + "</ option>"
      );
    });
  }
}

function candidateInfo(_id) {
  return contract.methods.candidates(_id).call();
}

function registeredVoter(_add) {
  return contract.methods.voters(_add).call();
}

function candidateCount() {
  contract.methods
    .totalCandidates()
    .call()
    .then(result => {
      totalCandidates = result;
      updateUI();
    });
}

export function vote() {
  let voteId = $("#candidateSelection").val();
  $("#txState").empty();
  registeredVoter(userAcc).then(function(result) {
    if (result === true) {
      $("#txState").text(`Error: You cannot vote twice!!`);
      window.alert("Error: You cannot vote twice!!");
    } else {
      $("#txState").text(`Voting for candidate #${voteId}, please wait...`);
      return contract.methods
        .vote(voteId)
        .send({ from: userAcc })
        .on("receipt", function(receipt) {
          $("#txState").text("We have received your vote!");
        })
        .on("error", function(error) {
          $("#txState").text(error);
        });
    }
  });
}

window.addEventListener("load", function() {
  if (typeof web3 !== "undefined") {
    web3js = new Web3(web3.currentProvider);
  } else {
    console.log("Metamask not installed!");
  }
  launch();
});
