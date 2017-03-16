@smoketest
Feature: smoke test #1, go through the service to lite mode


  Scenario: login
    #actions at first page
    Given open yandex.ua
    And verify that page with url "yandex" is opened
    And check that element with name "Log_In form" is displayed on "first page"
    And type to input with name "Login" text: "email" on "first page"
    And type to input with name "Password" text: "password" on "first page"
    When press element with text "Button log_In" on "first page"
    Then check that element with name "Profile" is displayed on "second page"
    And verify that page with url "inbox" is opened


  Scenario: go through service to lite mode
    #actions at second page
    Given check profile
    When press element with text "Lite mode" on "second page"
    Then verify that page with url "lite" is opened


