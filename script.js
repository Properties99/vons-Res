document.addEventListener('DOMContentLoaded', function() {
    const topSelect = document.getElementById('top');
    const bottomSelect = document.getElementById('bottom');

    topSelect.addEventListener('change', function() {
        const top = this.value;
        
        // Enable the bottom select dropdown
        bottomSelect.disabled = false;

        // Define bottoms options based on the selected top
        const bottoms = {
            Cairo_gate: ['Aspen', 'Eden', 'Elan'],
            Soul: ['Flow', 'Infinity', 'Island'],
            Belle_vie: ['Valley Villas', 'Lake Villas', 'Field Villas']
        };

        // Clear previous options in the bottom select dropdown
        bottomSelect.innerHTML = '';

        // Populate the bottom select dropdown with options based on the selected top
        if (bottoms[top]) {
            bottoms[top].forEach(function(bottom) {
                const option = document.createElement('option');
                option.value = bottom.toLowerCase().replace(' ', '_');
                option.textContent = bottom;
                bottomSelect.appendChild(option);
            });
        } else {
            // If no suggestions are available for the selected top, show a default message
            const option = document.createElement('option');
            option.value = '';
            option.textContent = '--No suggestions available--';
            bottomSelect.appendChild(option);
        }
    });
});