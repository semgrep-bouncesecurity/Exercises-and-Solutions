
if (window.location.search == "")
{
    location.href = location.href + "?param1=%22%20onerror%3Dalert(1)%3E";
}

// The join mode rule should only highlight this result
// ruleid: sol23-02_dbg_source_join
function GetSomeData1()
{
    return decodeURI(new URLSearchParams(window.location.search).get('param1'));
}

// The join mode rule should not highlight this result
// ok: sol23-02_dbg_source_join
function GetSomeData2()
{
    return "Safe hardcoded data";
}

// The join mode rule should not highlight this result
// ruleid: sol23-02_dbg_source_join
function GetSomeData3()
{
    // Not actually used
    return decodeURI(new URLSearchParams(window.location.search).get('param3'));
}
