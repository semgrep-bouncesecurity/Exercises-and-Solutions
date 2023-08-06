const el = element.innerHTML;

class UnsafeFunctions {

    bad1(userInput) {
    // ruleid: sol07_dbg_patterns
      el.innerHTML = '<div>' + userInput + '</div>';
    }

    bad2(userInput) {
      const name = '<div>' + userInput + '</div>';
    // ruleid: sol07_dbg_patterns
      document.write(name);
    }

    ok1() {
      const name = "<div>it's ok</div>";
    // ok: sol07_dbg_patterns
      el.innerHTML = name;
    }

    ok2() {
    // ok: sol07_dbg_patterns
      document.write("<div>it's ok</div>");
    }

}

class SafeFunctions {

  // These functions look unsafe but are actually safe

    bad1(userInput) {
    // ok: sol07_dbg_patterns
      el.innerHTML = '<div>' + userInput + '</div>';
    }

    bad2(userInput) {
      const name = '<div>' + userInput + '</div>';
    // ok: sol07_dbg_patterns
      document.write(name);
    }
}
