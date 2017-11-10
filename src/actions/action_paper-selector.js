export function selectPaper(paper) {
    // console.log(`A different paper has been selected: ${paper}`);
    return  {
        type: 'PAPER_SELECTED',
        payload: paper
    };
}
