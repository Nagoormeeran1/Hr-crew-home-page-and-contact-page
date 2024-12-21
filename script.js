function showContent(id) {
    document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelector(`[onclick="showContent('${id}')"]`).classList.add('active');
}