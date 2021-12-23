export const CREATE_PROPERTY_MUTATION =`
	mutation(
		$landlordname:String!,
		$propertyname:String!,
		$price:String!,
		$description:String!,
		$location:String!,
		$amenities:String!,
		$vacancy:String!,
		$contact:String!,
		$mainimage:String!,
		$overviewimage:String!,
	){
		createProperty(input:{
			landlordname:$landlordname
			propertyname:$propertyname
			price:$price
			description:$description
			location:$location
			amenities:$amenities
			vacancy:$vacancy
			contact:$contact
			mainimage:$mainimage
			overviewimage:$overviewimage
		}){
			_id
			createdAt
			landlordname
			propertyname
			price
		}
	}
`

export const DELETE_PROPERTY_MUTATION =`
	mutation($propertyId: ID!){
		deleteProperty(propertyId:$propertyId){
			_id
		}
	}
`
