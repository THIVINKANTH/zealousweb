let Studentvalues=[
    {
        "stuName":"Thivinkanth",
        "stuContact":"9514594679",
        "stuEmail":"thivinkanth@gmail.com",
        "stuCourse":"Java Full Stack"
    },
    {
        "stuName":"Pradeep",
        "stuContact":"7904201927",
        "stuEmail":"pradeep@gmail.com",
        "stuCourse":"Python Full Stack"
    },
    {
        "stuName":"Manojkumar",
        "stuContact":"9876543476",
        "stuEmail":"manoj@gmail.com",
        "stuCourse":"Web Development"
    }
]
export const create=(data)=>
{
    Studentvalues.push(data);
}
export const list=()=>
{
    return Studentvalues;
}