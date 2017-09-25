class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def hello
    render file: 'public/histogram.html', layout: false
  end
end