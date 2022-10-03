var form=document.getElementById('form');
form.addEventListener('click',networkCall);
function networkCall(){
  let name=document.getElementById('in1').value;
   let email=document.getElementById('in2').value;
    let pwd=document.getElementById('in3').value

  let obj={
    name,
    email,
    pwd
  }
  axios
    .post('https://crudcrud.com/api/3ece60d8090749e5a6fcda8b1ddd899d/Status',obj)
  .then(res=>console.log(res))
  .catch(err=>console.log(err))

}