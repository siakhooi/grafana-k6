import exec from "k6/execution";

export const options = {
  scenarios: {
    my_scenario: {
      executor: "per-vu-iterations",
      vus: 2,
      iterations: 3,
    },
    your_scenario: {
      executor: "per-vu-iterations",
      vus: 3,
      iterations: 4,
    },
  },
};

export default function () {
  let uuid = Math.random().toString(16).slice(2);
  console.log(uuid+" scenario name: " + exec.scenario.name);
  console.log(
    uuid + " scenario iterationInTest: " + exec.scenario.iterationInTest,
  );
  console.log(uuid + " vu iterationInScenario: " + exec.vu.iterationInScenario);
  console.log(uuid + " vu idInTest: " + exec.vu.idInTest);
}
