const apiKey = 'plEu-YUW6JBPZW9vl6sqkzfezT0tqAqG29JMoZoNOtaKgPNTv5Ad36-LGdRMA2xPS-46XDW7eny7ks_hrargQqQe5jXMHXQE3aRWaQwWB2Z7rvLM1WgyW_p7iYafYnYx'

const Yelp ={
    search: (term,location,sortBy) =>  {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{ 
            headers: {
              Authorization: `Bearer ${apiKey}` 
            }
          }).then(response => {
            return response.json();
          }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.address,
                        city: business.city,
                        state: business.state,
                        zipCode: business.zipCode,
                        category: business.category,
                        rating: business.rating,
                        reviewCount: business.reviewCount
                      }
                });
            }
          });
    } 
}

export default Yelp;