document.querySelector(`#contact a[href*="facebook"]`).addEventListener("mouseover", e => {
    document.querySelector(`img[src*="facebook"]`).src = "img/facebook_logo_hover.svg";
});

document.querySelector(`#contact a[href*="facebook"]`).addEventListener("mouseout", e => {
    document.querySelector(`img[src*="facebook"]`).src = "img/facebook_logo.svg";
});

document.querySelector(`#contact a[href*="instagram"]`).addEventListener("mouseover", e => {
    document.querySelector(`img[src*="instagram"]`).src = "img/instagram_logo_hover.svg";
});

document.querySelector(`#contact a[href*="instagram"]`).addEventListener("mouseout", e => {
    document.querySelector(`img[src*="instagram"]`).src = "img/instagram_logo.svg";
});