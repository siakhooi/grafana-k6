run:
	rm -f loadtest.log console.log

	k6 run --out json=results.json  \
	--console-output "console.log" \
	iterations.js 2>&1 	| tee -a loadtest.log

# vu.idInTest = which user (range: 1..sum(vus*iterations)) - combine all scenarios
# scenario.iterationInTest = all iterations (range: 0..vus*iterations) - each scenario
# vu.iterationInScenario = iterations/vu : (range: 0..iterations) - each iterations/vus/scenario


