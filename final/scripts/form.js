export function showFormData(){
    const params = new URLSearchParams(window.location.search);
    
    const html = `
        <p><strong>Name:</strong> ${params.get('name')}</p>
        <p><strong>Email:</strong> ${params.get('email')}</p>
        <p><strong>Color Choice:</strong> ${params.get('color')}</p>
        <p><strong>Message:</strong> ${params.get('message')}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
    `;
    
    document.querySelector('#form-data').innerHTML = html;
    const order = {
        name: params.get('name'),
        color: params.get('color'),
        date: Date.now()
    };
    localStorage.setItem('lastOrder', JSON.stringify(order));
}