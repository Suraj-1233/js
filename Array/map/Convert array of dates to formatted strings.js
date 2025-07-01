// Input: ['2025-06-30', '2025-07-01']  
// Output: ['30 Jun 2025', '01 Jul 2025']


 const dates=['2025-06-30','2025-12-01'];
  
 const formattedDate=dates.map(datastr=>{
    const date=new Date(datastr);
    console.log(date);
    return date.toLocaleDateString('en-GB',{
        day:'2-digit',month:"numeric",year:"2-digit"
    });
 });
 console.log(formattedDate)

