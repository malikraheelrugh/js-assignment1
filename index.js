form = 
[
{
    label:'First Name *',
    type:'text',
    isRequired:false
},
{
    label:'last Name *',
    type:'text',
    isRequired:false
},
{
    label:'Email *',
    type:'mail',
    isRequired:false
},
{
    label:'Mobile Number *',
    type:'number',
    isRequired:false
}
]
const formContainer = document.getElementById("form");
const formElement = document.createElement("form");
form.forEach(field => {
    const label = document.createElement("label");
    label.textContent = field.label;
    label.style.color='white'
    label.style.fontStyle='italic'
    label.style.fontWeight='bold'
    label.style.fontSize='20px'
    label.style.fontFamily='sansSerif'
    const input = document.createElement("input");
    input.type = field.type;
    input.style.padding = '8px 50px 8px 5px';
    input.style.color='white'
    input.style.borderRadius='7px'
    input.style.border='none'
    input.setAttribute('placeholder','Enter')
    input.required = field.isRequired;
    input.name = field.label.replace(/\s+/g, '').toLowerCase();
    label.appendChild(document.createElement('br'));
    label.appendChild(input);
    formElement.appendChild(label);
    formElement.appendChild(document.createElement("br"));
});
formContainer.appendChild(formElement);

const btn = document.getElementById("btn")
btn.style.backgroundColor='green'
btn.style.padding='10px 20px'
btn.style.backgroundColor='green'
btn.style.color='white'
btn.style.fontSize='25px'
btn.style.borderRadius='8px'
btn.style.border='none'
btn.style.cursor='pointer'
formElement.style.backgroundColor='green'
formElement.style.display='flex'
formElement.style.flexDirection='column'
formElement.style.justifyContent='center'
formElement.style.alignItems='center'
formElement.style.padding='1.5rem 0'
formElement.style.borderRadius='6px'
document.body.style.margin='0'
document.body.style.padding='0'
document.body.style.display='flex'
document.body.style.flexDirection='column'
document.body.style.justifyContent='center'
document.body.style.position='relative'
document.body.style.marginLeft='20%'
document.body.style.marginRight='20%'
document.body.style.marginTop='15%'
document.body.style.background='black'
btn.addEventListener('click' , function(){
    console.log('clicked me')
})