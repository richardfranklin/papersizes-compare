export function selectPaper(paper, pickerNo) {
    // console.log(`A different paper has been selected: ${paper}`);
    return  {
        type:       `PAPER_${pickerNo}_SELECTED`,
        payload:    paper
    };
}
