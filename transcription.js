function transcrybe() {
    let dna_field = document.getElementsByClassName('text_field_class_name')[0];
    let dna_chain = dna_field.value.toUpperCase.split('');
    let chain_incorrect = false;
    for(let i = 0; i < dna_chain.length ; i++){
        switch(dna_chain[i]){
            case 'G':
                dna_chain[i] = 'C';
                break;
            case 'T':
                dna_chain[i] = 'A';
                break;
            case 'C':
                dna_chain[i] = 'G';
                break;
            case 'A':
                dna_chain[i] = 'U';
                break;
            default:
                chain_incorrect = true;
                alert('Неизвестный нуклеотид ' + dna_chain[i] + ' на ' + i + ' месте.');
                break;
        }
        if (chain_incorrect) {
            break;
        }
    }
    if (!chain_incorrect) {
        dna_field.value = dna_chain.join('');
    }
}