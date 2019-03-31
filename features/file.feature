Feature: Working with text
  
Scenario: As a Wordsmith, I CRUD my own text
  Given I am on a page that contains a canvas
    And I open the text toolbox

  When I create a text object
    And set text content "Text1"
  Then I should see "Text1" on the canvas
  
  When I create a text object
    And set text content "Text2"
  Then I should see "Text1" on the canvas
    And should see "Text2" on the canvas
    And there should be a "text create" log record
  
  When I edit the first text object
    And set text content "Text3"
  Then I should not see "Text1" on the canvas
    And should see "Text2" on the canvas
    And should see "Text3" on the canvas
    And there should be a "text update" log record
  
  When I delete the first text object
  Then I should see "Text2" on the canvas
    And should not see "Text1" on the canvas
    And should not see "Text3" on the canvas
    And there should be a "text delete" log record