# frozen_string_literal: true

Given('I am on a page that contains a canvas') do
  visit('/')
  page.has_css?('canvas')
end

Given('I open the text toolbox') do
  find_button('open-toolbox').click
  page.has_css?('#toolbox-controls', visible: true)
end

When('I create a text object') do
end

When('set text content {string}') do |_string|
  pending # Write code here that turns the phrase above into concrete actions
end

Then('I should see {string} on the canvas') do |_string|
  pending # Write code here that turns the phrase above into concrete actions
end

Then('should see {string} on the canvas') do |_string|
  pending # Write code here that turns the phrase above into concrete actions
end

Then('there should be a {string} log record') do |_string|
  pending # Write code here that turns the phrase above into concrete actions
end

When('I edit the first text object') do
  pending # Write code here that turns the phrase above into concrete actions
end

Then('I should not see {string} on the canvas') do |_string|
  pending # Write code here that turns the phrase above into concrete actions
end

When('I delete the first text object') do
  pending # Write code here that turns the phrase above into concrete actions
end

Then('should not see {string} on the canvas') do |_string|
  pending # Write code here that turns the phrase above into concrete actions
end
