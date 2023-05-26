export const sanitizedLineItems = lineItems =>
  lineItems.reduce((data, lineItem) => {
    const item = data;
    let variantData = null;
    if (lineItem.selected_options.length) {
      variantData = {
        [lineItem.selected_options[0].group_id]: lineItem.selected_options[0].option_id,
      };
    }
    item[lineItem.id] = {
      quantity: lineItem.quantity,
      variants: variantData,
    };
    return item;
  }, {});

export const loadRazorpay = () =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';

    script.onload = resolve;
    script.onerror = reject;

    document.body.appendChild(script);
  });
