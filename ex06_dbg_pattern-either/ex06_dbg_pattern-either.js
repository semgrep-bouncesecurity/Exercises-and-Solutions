
// ok: ex06_dbg_pattern-either
var intNumber = 1

// ok: ex06_dbg_pattern-either
var intAdded = intNumber + 1
console.log(intAdded)


// ruleid: ex06_dbg_pattern-either
if (intNumber == intAdded)
{
	console.log("Should never appear")
}

// ruleid: ex06_dbg_pattern-either
if (intNumber != intAdded)
{
	console.log("Should appear")
}

// ruleid: ex06_dbg_pattern-either
if (intNumber == intAdded - 1)
{
	console.log("Appears but is theoretically dangerous")
}

// ruleid: ex06_dbg_pattern-either
if (intNumber = intAdded)
{
	console.log("Appears because code is incorrect")
}
 
// ruleid: ex06_dbg_pattern-either
if (intNumber == intAdded)
{
	console.log("Appears because of the incorrect code (and theoretically dangerous)")
}

// ok: ex06_dbg_pattern-either
if (intNumber === intAdded)
{
	console.log("Appears because of the incorrect code")
}
