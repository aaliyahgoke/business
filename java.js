document.queryselectorAll('.read-more-btn').forEach(button=>{
    button.addEventListener('click',()=>{
        const contentBox =button.parentElement;
        const fullText =
        contentBox.queryselector('full-text');

        if(fullText.style.display===
     "none" || fullText.style.display ==="") {
              fulllText.stlye.display =
     
    "block";    
    } else {
        fullText.stlye.display = "none";
    }
});
});