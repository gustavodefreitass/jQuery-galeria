$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        console.log('submit')
        e.preventDefault()
        const enderecoNovaImagem = $('#endereco-imagem-nova').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem)
        $(`<div class="overlay-imagem-link">,<a href="${enderecoNovaImagem}" target="_blank">Ver Imagem em tamanho real</a></div>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1500)
        $('#endereco-imagem-nova').val('')
    })
})

    