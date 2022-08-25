function marianaContaAteTres(n){
    var letra = "";
    for(let i = 1; i < n; i++){
        letra += `Mariana conta ${i}\n`;
        letra += `Mariana conta ${i}, é ${i}, é ${i}, é\n`
        letra += 'Ana, viva a Mariana, viva a Mariana\n\n';
    }
    console.log(letra);
}

function marianaContaAteNove(n){

    var letra = "";
    for(let i = 4; i <= 4; i++){
        letra += `Mariana conta ${i}\n`;
        letra += `Mariana conta ${i}, é ${i - 3}, é ${i - 2}, é ${i - 1}, é ${i}, é\n`;
        letra += 'Ana, viva a Mariana, viva a Mariana\n\n';
    }

    for(let i = 5; i <= 5; i++){
        letra += `Mariana conta ${i}\n`;
        letra += `Mariana conta ${i}, é ${i - 4}, é ${i - 3}, é ${i - 2}, é ${i - 1}, é ${i}, é\n`;
        letra += 'Ana, viva a Mariana, viva a Mariana\n\n';
    }

    for(let i = 6; i <= 6; i++){
        letra += `Mariana conta ${i}\n`;
        letra += `Mariana conta ${i}, é ${i - 5}, é ${i - 4}, é ${i - 3}, é ${i - 2}, é ${i - 1}, é ${i}, é\n`;
        letra += 'Ana, viva a Mariana, viva a Mariana\n\n';
    }

    for(let i = 7; i <= 7; i++){
        letra += `Mariana conta ${i}\n`;
        letra += `Mariana conta ${i}, é ${i - 6}, é ${i - 5}, é ${i - 4}, é ${i - 3}, é ${i - 2}, é ${i - 1}, é ${i}, é\n`;
        letra += 'Ana, viva a Mariana, viva a Mariana\n\n';
    }

    for(let i = 8; i <= 8; i++){
        letra += `Mariana conta ${i}\n`;
        letra += `Mariana conta ${i}, é ${i - 7}, é ${i - 6}, é ${i - 5}, é ${i - 4}, é ${i - 3}, é ${i - 2}, é ${i - 1}, é ${i}, é\n`;
        letra += 'Ana, viva a Mariana, viva a Mariana\n\n';
    }

    for(let i = 9; i <= 9; i++){
        letra += `Mariana conta ${i}\n`;
        letra += `Mariana conta ${i}, é ${i - 8}, é ${i - 7}, é ${i - 6}, é ${i - 5}, é ${i - 4}, é ${i - 3}, é ${i - 2}, é ${i - 1}, é ${i}, é\n`;
        letra += 'Ana, viva a Mariana, viva a Mariana\n\n';
    }
    
    letra += "Mariana conta 10\n";
    letra += "Mariana conta 10\n";
    for(let i = 10; i <= 10; i++){
        letra += `É ${i - 9}, é ${i - 8}, é ${i - 7}, é ${i - 6}, é ${i - 5}, é ${i - 4}, é ${i - 3}, é ${i - 2}, é ${i - 1}, é ${i}, é\n`;
        letra += 'Ana, viva a Mariana, viva a Mariana\n\n';
    }
    console.log(letra);

}

marianaContaAteTres(4);
marianaContaAteNove(10);