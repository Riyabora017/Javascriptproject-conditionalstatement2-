//  Online Food Ordering:

var orderTotal = 45; 
var isLoyaltyMember = 'no'; 
var deliveryDistance = 6; 

function checkDeliveryEligibility(orderTotal, isLoyaltyMember, deliveryDistance) {
    if (orderTotal >= 50) {
        return "Free delivery";
    } else if (orderTotal < 50) {
        if (isLoyaltyMember === 'yes') {
            return "Free delivery";
        } else if (isLoyaltyMember === 'no') {
            if (deliveryDistance < 5) {
                return "Free delivery";
            } else {
                return "Delivery is not free";
            }
        } else {
            return "Invalid loyalty status";
        }
    }
}

var deliveryEligibility = checkDeliveryEligibility(orderTotal, isLoyaltyMember, deliveryDistance);
console.log(deliveryEligibility);


