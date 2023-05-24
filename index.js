const container = document.querySelector('.container');
const title = document.querySelector('.title');
const body = document.querySelector('.body');
const load = document.querySelector('.spinner');
const timer = document.querySelector('#timer');
const example2width = 300
const example3height = 300
body.onload = () => {
    setTimeout(() => {
        timer.textContent = '4%';
    }, 200);
    setTimeout(() => {
        timer.textContent = '8%';
    }, 400);
    setTimeout(() => {
        timer.textContent = '12%';
    }, 600);
    setTimeout(() => {
        timer.textContent = '16%';
    }, 800);
    setTimeout(() => {
        timer.textContent = '20%';
    }, 1000);
    setTimeout(() => {
        timer.textContent = '24%';
    }, 1200);
    setTimeout(() => {
        timer.textContent = '28%';
    }, 1400);
    setTimeout(() => {
        timer.textContent = '32%';
    }, 1600);
    setTimeout(() => {
        timer.textContent = '36%';
    }, 1800);
    setTimeout(() => {
        timer.textContent = '40%';
    }, 2000);
    setTimeout(() => {
        timer.textContent = '44%';
    }, 2200);
    setTimeout(() => {
        timer.textContent = '48%';
    }, 2400);
    setTimeout(() => {
        timer.textContent = '52%';
    }, 2600);
    setTimeout(() => {
        timer.textContent = '56%';
    }, 2800);
    setTimeout(() => {
        timer.textContent = '60%';
    }, 3000);
    setTimeout(() => {
        timer.textContent = '64%';
    }, 3200);
    setTimeout(() => {
        timer.textContent = '68%';
    }, 3400);
    setTimeout(() => {
        timer.textContent = '72%';
    }, 3600);
    setTimeout(() => {
        timer.textContent = '76%';
    }, 3800);
    setTimeout(() => {
        timer.textContent = '80%';
    }, 4000);
    setTimeout(() => {
        timer.textContent = '84%';
    }, 4200);
    setTimeout(() => {
        timer.textContent = '88%';
    }, 4400);
    setTimeout(() => {
        timer.textContent = '92%';
    }, 4600);
    setTimeout(() => {
        timer.textContent = '96%';
    }, 4800);
    setTimeout(() => {
        timer.textContent = '100%';
    }, 5000);
    setTimeout(() => {
        container.style.display = 'grid';
        title.style.display = 'block';
        load.style.display = 'none';
        timer.style.display = 'none';
    }, 6000);
}

// jquery
$(document).ready(() => {
    $('.cssexample1').dblclick(() => {
        $('.cssexample1').css("backgroundColor", "#DF2E38")
        $('.cssexample1').css("color", "white")
    })
    $('#box1').click(() => {
        $('#box1').width(example2width)
        $('#box1').text('Clicked!!')
    })
    $('#box2').hover(() => {
        $('#box2').height(example3height)
        $('#box2').text('Hovered!!')
    })
    $('#box2').mouseleave(() => {
        $('#box2').height(50)
        $('#box2').text('Hover me')
    })
    $('#box3container').hover(() => {
        $('#box3').css('right', '0')
        $('#box3').text('Right')
    })
    $('#box3container').mouseleave(() => {
        $('#box3').css('right', '320px')
        $('#box3').text('Left')
    })
    $('#box4').mousedown(() => {
        $('#box4').css('border-radius', '100%')
        $('#box4').text('Circle')
    })
    $('#box4').mouseup(() => {
        $('#box4').css('border-radius', '0')
        $('#box4').text('Square')
    })
    $('#btn').click(() => {
        $('.paragraphs').clone().appendTo('#paragraphcontainer')
    })
    $('#reset').click(() => {
        $('#paragraphcontainer').html('<p class="paragraph">this is a paragraph</p>')
    })
    $('#h4').hover(() => {
        $('#h4').text("I'm Hovered")
        $('#h4').css("color", "#DF2E38")
    })
    $('#h4').mouseleave(() => {
        $('#h4').text("Hover me")
        $('#h4').css("color", "black")
    })
    $('.htmlbtn').click(() => {
        $('#sample').html("<button>This is a button</button>")
    })
    $('.htmlanchor').click(() => {
        $('#sample').html("<a href='#'>This is a Anchor Tag</a>")
    })
    $('.htmlradio').click(() => {
        $('#sample').html("<input type='radio' id='radio'><label for='radio'> This is a Radio Button</label>")
    })
    $('.htmltext').click(() => {
        $('#sample').html("<input type='text' placeholder='This is a Text Box'>")
    })
    $('#sampletag').text("'<a href='#'>This is a Anchor Tag</a>'")
    $('.btnremove').click(() => {
        $('h5').remove()
        $('.btnremove').html('Removed!!')
    })
    $('.domsamplecontainer').dblclick(() => {
        $('.domsamplecontainer').empty()
    })
    $('#toggle').click(() => {
        $('#toggle-img').toggle()
    })
    $('#animation').click(() => {
        $("#smallbox").animate({ right: '0px' })
        $("#smallbox").animate({ bottom: '0px' })
        $("#smallbox").animate({ left: '0px' })
        $("#smallbox").animate({ top: '0px' })
    })
    $('#delay').click(() => {
        $('#hidden').delay(5000).fadeIn()
    })
    $('#fade').hover(() => {
        $('#fade').fadeOut()
    })
    $('.fadein').mouseleave(() => {
        $('#fade').fadeIn()
    })
    $('.slide-btn').click(() => {
        $('.slide').slideToggle('slow')
    })
    $('#odd').mousedown(() => {
        $('.isOdd:odd').css("background-color", "#DF2E38")
        $('.isOdd:odd').css("color", "white")
    })
    $('#odd').mouseup(() => {
        $('.isOdd:odd').css("background-color", "white")
        $('.isOdd:odd').css("color", "black")
    })
    $('.girls').mousedown(() => {
        $('.gender').filter('.girl').css("background-color", "pink")
    })
    $('.girls').mouseup(() => {
        $('.gender').filter('.girl').css("background-color", "white")
    })
    $('.boys').mousedown(() => {
        $('.gender').filter('.boy').css("background-color", "lightblue")
    })
    $('.boys').mouseup(() => {
        $('.gender').filter('.boy').css("background-color", "white")
    })
    $('#children').mousedown(() => {
        $('ul').children().css({ "color": "#DF2E38" })
    })
    $('#children').mouseup(() => {
        $('ul').children().css({ "color": "black" })
    })
})