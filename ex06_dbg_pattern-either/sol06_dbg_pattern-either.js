
// ok: sol06_dbg_pattern-either
var intNumber = 1

// ok: sol06_dbg_pattern-either
var intAdded = intNumber + 1
console.log(intAdded)


// ruleid: sol06_dbg_pattern-either
if (intNumber == intAdded)
{
	console.log("Should never appear")
}

// ruleid: sol06_dbg_pattern-either
if (intNumber != intAdded)
{
	console.log("Should appear")
}

// ruleid: sol06_dbg_pattern-either
if (intNumber == intAdded - 1)
{
	console.log("Appears but is theoretically dangerous")
}

// ruleid: sol06_dbg_pattern-either
if (intNumber = intAdded)
{
	console.log("Appears because code is incorrect")
}
 
// ruleid: sol06_dbg_pattern-either
if (intNumber == intAdded)
{
	console.log("Appears because of the incorrect code (and theoretically dangerous)")
}

// ok: sol06_dbg_pattern-either
if (intNumber === intAdded)
{
	console.log("Appears because of the incorrect code")
}
