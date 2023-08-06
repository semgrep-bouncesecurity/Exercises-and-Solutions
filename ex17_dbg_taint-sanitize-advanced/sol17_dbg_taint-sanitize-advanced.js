function trackSearch() {
        
    var query = (new URLSearchParams(window.location.search)).get('search');
    // ruleid: sol17_dbg_taint-sanitize-advanced
    document.write('<img src="/resources/images/tracker.gif?searchTerms='+query+'">');
}


function getSearch()
{
    var query = (new URLSearchParams(window.location.search)).get('search');
    trackSearch2(query);
    trackSearch3(query);
}


function trackSearch2(query) {
        
    
    var a = "1";
    // ruleid: sol17_dbg_taint-sanitize-advanced
    document.write('<img src="/resources/images/tracker.gif?searchTerms='+query+'">');
}


function trackSearch3(query) {
        
    
    var a = "1";
    
    query = new Sanitizer().sanitizeToString(query);
    // ok: sol17_dbg_taint-sanitize-advanced
    document.write('<img src="/resources/images/tracker.gif?searchTerms='+query+'">');
}

function trackSearch4(query) {
    
    var a = "1";
    CustomSanitize(query)
    // ruleid: sol17_dbg_taint-sanitize-advanced
    document.write('<img src="/resources/images/tracker.gif?searchTerms='+query+'">');
}

function trackSearch5(query) {
    
    var a = "1";
    query = CustomSanitize(query)
    // ok: sol17_dbg_taint-sanitize-advanced
    document.write('<img src="/resources/images/tracker.gif?searchTerms='+query+'">');
}


function getSearch2()
{
    var query = pullInput();
    trackSearch4(query);
    
    trackSearch5(query);
}

function pullInput()
{
    var query = (new URLSearchParams(window.location.href)).get('search');
    return query;
}

function getSearch3(potentiallyDangerous)
{
    var query = potentiallyDangerous.value1;
    
    // ruleid: sol17_dbg_taint-sanitize-advanced
    document.write('<img src="/resources/images/tracker.gif?searchTerms='+query+'">');
    
    potentiallyDangerous.selfClean();

    query = potentiallyDangerous.value1;

    // ok: sol17_dbg_taint-sanitize-advanced
    document.write('<img src="/resources/images/tracker.gif?searchTerms='+query+'">');
}

