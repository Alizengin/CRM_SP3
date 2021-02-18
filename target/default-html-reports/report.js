$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/LogOut.feature");
formatter.feature({
  "name": "Land in login page after logout",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "login as a client user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user in on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.crm.step_definitions.LogOutStepDefs.the_user_in_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in using credentials",
  "keyword": "When "
});
formatter.match({
  "location": "com.crm.step_definitions.LogOutStepDefs.the_user_logs_in_using_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.crm.step_definitions.LogOutStepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Logout from website",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user click on the logout",
  "keyword": "When "
});
formatter.match({
  "location": "com.crm.step_definitions.LogOutStepDefs.the_user_click_on_the_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to land in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.crm.step_definitions.LogOutStepDefs.the_user_should_be_able_to_land_in_login_page()"
});
formatter.result({
  "status": "passed"
});
});