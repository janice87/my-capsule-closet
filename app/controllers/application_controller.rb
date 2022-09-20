class ApplicationController < ActionController::API
  include ActionController::Cookies
rescue_from ActiveRecord::RecordNotFound, with: :response_not_found
rescue_from ActiveRecord::RecordInvalid, with: :response_invalid

private

def response_not_found
  render json: {error: "Record not found"}, status: :not_found
end

def response_invalid(invalid)
  render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
end

end
