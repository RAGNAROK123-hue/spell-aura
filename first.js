

function searchSpells() {
    var input = document.getElementById('search-bar').value.toLowerCase();
    var spells = document.querySelectorAll('.spell');
    spells.forEach(function(spell) {
        var spellName = spell.getAttribute('data-name').toLowerCase();
        if (spellName.includes(input)) {
            spell.style.display = "block";
        } else {
            spell.style.display = "none";
        }
    });
}

function toggleMenu() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('hidden')) {
        navMenu.classList.remove('hidden');
    } else {
        navMenu.classList.add('hidden');
    }
}

function showSpellInfo(spell) {
    // Code to display spell information
}

function toggleDescription(spell) {
    var desc = document.getElementById(spell + '-desc');
    if (desc.classList.contains('hidden')) {
        desc.classList.remove('hidden');
        desc.classList.add('show');
       
    } else {
        desc.classList.remove('show');
        desc.classList.add('hidden');
    }
}
function toggleReviews() {
    var reviews = document.getElementById('customer-reviews');
    if (reviews.classList.contains('hidden')) {
        reviews.classList.remove('hidden');
        reviews.classList.add('show');
    } else {
        reviews.classList.remove('show');
        reviews.classList.add('hidden');
    }
}
