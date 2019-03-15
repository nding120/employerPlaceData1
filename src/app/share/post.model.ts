export interface Post{
    allplans:boolean,
    bydemographics:boolean,
    byplanids:boolean,
    allselect:boolean,
    byprice:boolean,
    byzipcode:boolean,
    demographics:[{
        age:number,
        county:string,
        dob: string,
        gender: string ,
        name:string,
        id:string,
        tobacco:boolean,
        zip:number
    }],
    planids:[],
    income:number,
    householdsize:number,
    year:number,
    zipcode:number,
    MemberId:number
}