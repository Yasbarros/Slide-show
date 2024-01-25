$(document).ready(function() {
            var bgNumber = 1;

            slide(bgNumber);

            function slide(n) {
                var allBgs = 3;
                $('#imageBg').css('background-image', 'url("imagens/' + n + '.jpg")');
                botoes(n, allBgs);
                bgNumber = n;
            }

            function anterior() {
                if (bgNumber > 1) {
                    bgNumber--;
                    slide(bgNumber);
                }
            }

            function proximo() {
                if (bgNumber < 3) {
                    bgNumber++;
                    slide(bgNumber);
                }
            }

            function botoes(n, m) {
                $('#botoes').empty();
                for (var a = 1; a <= m; a++) {
                    if (a === n) {
                        $('#botoes').append('<li class="selected" onclick="slide(' + a + ')"></li>');
                    } else {
                        $('#botoes').append('<li onclick="slide(' + a + ')"></li>');
                    }
                }
            }
            $('.anterior').click(anterior);
            $('.proximo').click(proximo);
        });