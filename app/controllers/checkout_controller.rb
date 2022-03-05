class CheckoutController < ApplicationController
  before_action :signed_in_admin, only: [:new, :create]

  def new
    current_user.set_payment_processor :stripe

    @checkout_session = current_user.payment_processor.checkout(
      mode: "subscription",
      line_items: [{
        price: 'price_1KZxro2iWIAcViJw5GgES1R7',
        quantity: 4
      }],
      subscription_data: {
        trial_period_days: 15
      },
      success_url: root_url,
      cancel_url: root_url
    )
  end

  def create
  end
end
