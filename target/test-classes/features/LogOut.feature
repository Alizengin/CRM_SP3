@wip
Feature: Land in login page after logout

  Scenario: login as a client user
    Given the user in on the login page
    When the user logs in using credentials
    Then the user should be able to login

  Scenario: Logout from website
    When the user click on the logout
    Then the user should be able to land in login page

