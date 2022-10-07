const elemen = document.querySelectorAll(".item-pencarian-container");

for (let i = 0; i < elemen.length; i++) {
    elemen[i].onclick = () => {
        this.location.href = "../profile.html";
    }
}