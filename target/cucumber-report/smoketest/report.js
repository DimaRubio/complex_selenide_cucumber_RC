$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("smoketest#1.feature");
formatter.feature({
  "line": 2,
  "name": "smoke test #1, go through the service to lite mode",
  "description": "",
  "id": "smoke-test-#1,-go-through-the-service-to-lite-mode",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoketest"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "login",
  "description": "",
  "id": "smoke-test-#1,-go-through-the-service-to-lite-mode;login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#actions at first page"
    }
  ],
  "line": 7,
  "name": "open yandex.ua",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "verify that page with url \"yandex\" is opened",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "check that element with name \"Log_In form\" is displayed on \"first page\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "type to input with name \"Login\" text: \"email\" on \"first page\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "type to input with name \"Password\" text: \"password\" on \"first page\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "press element with text \"Button log_In\" on \"first page\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "check that element with name \"Profile\" is displayed on \"second page\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "verify that page with url \"inbox\" is opened",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.openRiskmarketRu()"
});
formatter.result({
  "duration": 10081346303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yandex",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.verifyThatPageWithUrlIsOpened(String)"
});
formatter.result({
  "duration": 3480179464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log_In form",
      "offset": 30
    },
    {
      "val": "first page",
      "offset": 60
    }
  ],
  "location": "MyStepdefs.checkThatElementWithNameIsDisplayed(String,String)"
});
formatter.result({
  "duration": 247691187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 25
    },
    {
      "val": "email",
      "offset": 39
    },
    {
      "val": "first page",
      "offset": 50
    }
  ],
  "location": "MyStepdefs.typeToInputWithNameText(String,String,String)"
});
formatter.result({
  "duration": 1433829649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 25
    },
    {
      "val": "password",
      "offset": 42
    },
    {
      "val": "first page",
      "offset": 56
    }
  ],
  "location": "MyStepdefs.typeToInputWithNameText(String,String,String)"
});
formatter.result({
  "duration": 1184524640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Button log_In",
      "offset": 25
    },
    {
      "val": "first page",
      "offset": 44
    }
  ],
  "location": "MyStepdefs.press(String,String)"
});
formatter.result({
  "duration": 187344201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Profile",
      "offset": 30
    },
    {
      "val": "second page",
      "offset": 56
    }
  ],
  "location": "MyStepdefs.checkThatElementWithNameIsDisplayed(String,String)"
});
formatter.result({
  "duration": 4474773190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inbox",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.verifyThatPageWithUrlIsOpened(String)"
});
formatter.result({
  "duration": 3542918583,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "go through service to lite mode",
  "description": "",
  "id": "smoke-test-#1,-go-through-the-service-to-lite-mode;go-through-service-to-lite-mode",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#actions at second page"
    }
  ],
  "line": 19,
  "name": "check profile",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "press element with text \"Lite mode\" on \"second page\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "verify that page with url \"lite\" is opened",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.checkProfile()"
});
formatter.result({
  "duration": 45939917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lite mode",
      "offset": 25
    },
    {
      "val": "second page",
      "offset": 40
    }
  ],
  "location": "MyStepdefs.press(String,String)"
});
formatter.result({
  "duration": 172824199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lite",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.verifyThatPageWithUrlIsOpened(String)"
});
formatter.result({
  "duration": 3262489437,
  "status": "passed"
});
});