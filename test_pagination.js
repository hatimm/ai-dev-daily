function simulatePagination(totalPages, currentPage) {
    let pages = [];
    function addPageNumber(num) {
        pages.push(num);
    }

    // Always show first page
    addPageNumber(1);

    if (totalPages > 7) {
        if (currentPage > 3) {
            pages.push('...');
        }
        const startPage = Math.max(2, currentPage - 1);
        const endPage = Math.min(totalPages - 1, currentPage + 1);
        for (let i = startPage; i <= endPage; i++) {
            addPageNumber(i);
        }
        if (currentPage < totalPages - 2) {
            pages.push('...');
        }
    } else {
        for (let i = 2; i < totalPages; i++) {
            addPageNumber(i);
        }
    }

    // Always show last page if more than 1 page
    if (totalPages > 1) {
        addPageNumber(totalPages);
    }

    console.log(`Pages for totalPages=${totalPages}, currentPage=${currentPage}:`, pages.join(', '));
}

console.log("--- Testing fixed logic ---");
simulatePagination(2, 1);
simulatePagination(7, 1);
simulatePagination(8, 1);
simulatePagination(8, 4);
simulatePagination(8, 7);
simulatePagination(8, 8);
simulatePagination(10, 5);
