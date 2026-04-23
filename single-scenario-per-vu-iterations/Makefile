run:
	rm -f loadtest.log console.log
	k6 run --out json=results.json  \
	--console-output "console.log" \
	iterations.js 2>&1 	| tee -a loadtest.log

# vu.idInTest=which user
# scenario.iterationInTest=all iterations
# vu.iterationInScenario=iterations/vu
