import "/home/florin/Downloads/Restaurant-page/src/style.css";


const container = document.getElementById("content");






const addMenuPageContent = `<div class = "title_menu">Recipes</div>
<div id = "page">
<div class = "menu">
<div class = "recipe">
<h1 class = "title">Mcdonalds cheburger</h1>
<div class = "ingridients">
<p>Ground beef, Burger chese</p>
<p>Ketchup,pickels</p>
<p>hotdog</p>
</div>
</div>
<div class = "recipe">
<h1 class = "title">Mcdonalds cheburger</h1>
<div class = "ingridients">
<p>Ground beef, Burger chese</p>
<p>Ketchup,pickels</p>
<p>hotdog</p>
</div>
</div>
<div class = "recipe">
<h1 class = "title">Mcdonalds cheburger</h1>
<div class = "ingridients">
<p>Ground beef,Burger chese</p>
<p>Ketchup,pickels</p>
<p>hotdog</p>
</div>
</div>
<div class = "recipe">
<h1 class = "title">Mcdonalds cheburger</h1>
<div class = "ingridients">
<p>Ground beef, Burger chese</p>
<p>Ketchup,pickels</p>
<p>hotdog</p>
</div>
</div>
<div class = "recipe">
<h1 class = "title">Mcdonalds cheburger</h1>
<div class = "ingridients">
<p>Ground beef, Burger chese</p>
<p>Ketchup,pickels</p>
<p>hotdog</p>
</div>
</div>
<div class = "recipe">
<h1 class = "title">Mcdonalds cheburger</h1>
<div class = "ingridients">
<p>Ground beef, Burger chese</p>
<p>Ketchup,pickels</p>
<p>hotdog</p>
</div>
</div>
<div class = "recipe">
<h1 class = "title">Mcdonalds cheburger</h1>
<div class = "ingridients">
<p>Ground beef, Burger chese</p>
<p>Ketchup,pickels</p>
<p>hotdog</p>
</div>
</div>
<div class = "recipe">
<h1 class = "title">Mcdonalds cheburger</h1>
<div class = "ingridients">
<p>Ground beef, Burger chese</p>
<p>Ketchup,pickels</p>
<p>hotdog</p>
</div>
</div>
</div>`;
const addHomePageContent = `
    <div id = "page">
    <div class = "main">
    <div class = "content">
    <p>Best restaurant to buy burittos</p>
    <p>made by our magnificent chef since 2030</p>
    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRUYGBgZGBgYGBkYGBgYGBoYGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJCsxNDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAQMAwgMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAIFAAEGB//EAD0QAAEDAgQDBgUCBQMDBQAAAAEAAhEDBBIhMUEFUWEicYGRobEGEzLB0VLwFBVCcuGCkvEjYsIWMzRDov/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACcRAAICAgICAQQCAwAAAAAAAAABAhEDIRIxQVETBCJhkTJxQqGx/9oADAMBAAIRAxEAPwD1KnQEI4ZCFSqQEemZzK5ovdIphmDJKXZPgmXVIVTfXJlazmlFkJbDC7gwiVDiCo6dftZq1ZUyXGpWXRlJ2Epptdqprpr3mGeaZt7JzRmZKak/CAsHXICIytKqK1QhEtrgoWTdBRcNKhWIhBZUndF+VK0uwK7F2kb5pRXWwBU224KSTA0x5RgSsDIUgrQAy1EAWittKaEaexBKYcguCTGhfHBTIrBIVzhKF8zFkFDdDLcPCG6oFXsxt10UhUkpcgosPmBYlpCxOwMrMDQhMuUveXJKlbUiQs3LdIGhsVZ0SdxQGpVgxkBVHFLmJTlpbEipuqnbDW810VgwFq5Fl0A/Oe+F03C7kYctFEKTBstGUQM4Q7m4AW315yCG6nuRJ5bf5WyTlpABp0Q7PVbqW8aDyTPzYbmOkBZ1BWnwKuwFaQIMOIB5ax3pj+NaCGzJ6BJOyLj+9Um2pmTyHqf2U1CKCi3uKx2zCPQqZLn6bsRk6D1KfoXIOW/ulKDW0FFwHStSlaVdMMdKiMrBo29aYCplBfWhN6EMBRcFpj5WFyq9AAuaAcFVWwwPg6bK3Mql43iaMULOXsC4fUaQqmo+HZKlZxXqUe0vQTnus3Kyi1/iFpE7HRYmFg6YxlOioGBK8LoENzUOKPgQpulYkSdxQEwChPti/MrnWV8D5PNdLYXzSAiMk3sBO74VoQE5a0cLYVq0BwWOtwtFDyhClAmC7rA+5+3mjOrE5DLmiYBpoAsZTEHPVdMYqMaKFRVzA1nl3ppuYzEZrQAGQCxydgLVqLj/AFeirbmzeG5Z55q5Kg4JAUTBHZ5JjEAMtUa8tJEjI80hQf2i1wzHtzVrYFvY1w4wcjz5/wCVaNyVCx8EHSDKuiJEjdY5IJO0INiStRklEp8kRzVk9gbY3JTwrTSomortIDbsktfUg9hEbI1QyEFj9iokxHF0OH4apnSclaXnDgWyNVb1rYTMKBp7HRZOPsa0UbS6AsVv/BhYlTKtD1FsNhVXEm81avdEyue4pd5kDNVL+JKZR30AlE4PdHHhOihWoyJKVtXYXSFglsLPQbeuAMk/HZ7wuQ4XdFzw2V11M9kdF2YJW9gJVKbiQ2TB9Ocpg5CApMMk93uf8KDl0MZpRfUDRLiAOZIA9VUX3FiZFKI/XEg/2DQ95y71TOYXHE8lzubjJ8J08FhLMo6WzohgctvR1DuI0h/9rP8Ae38qdO4Y/wCl7XdzgfYrk8B6LXygdvRSs79Gj+lXs657FUcRtJ7TcnDMH7JO3u3sOTi5u7XGR4HVvt0Vwyo17MbdNxuDuD1W0JqXRzzxuPYvQqktBKubB8s6jL8KnpsgkdfdWXDDm5vMA+X/ACrmriZBfm9qE40oTrcTKk3JcyTQiTkrWejuqbLTqYKGrEBZmNVgAlY5uEJZlQkpMYzWeISlSqEWqzEEtTomc0nd0BP5ixF+UFiVDN3jwWlcfXMOPerS9vi2WnVUj3zJUS2RYG5utkiXlSrZmUBoMqENst+DVML8S7yxr4hhO4yXn9sACut4A/FLtmx3Sf8Aha4m+SoaLtrcIJ3yXL8WvjVe6iwnAzKq4f1OIn5YP6R/VzyGky9x7jzKLHw7t7ZEgOjId+YXP8HrUxw/EMXzajHuDsL5+Y/FnJGUHIHoF1SdqkzWKcXbTA8e4k+kAykwOfG5gN8IzXM1rriBM4mAHlmR35JoUXFgIY173AS94BzOubpz84VRc8MqYpc6nG4a1msaAYSYlY8YptX/AKN1KTSdd/kv+E3dXMVSCegRuKXdTB/0yA6d1QUbSsPlspvLarzqCcAa0HE4sIIj6dt0W6sLlrjTrVsbsGJhb2GmDDg7CAZEhTxV3aNPkklxp/2ToX/ENmMcBuTErpuAcZe1ofWZgBexj8+zLyGsf07RAPQnkuN4Xw2sXFxexw2DoO+4iRkupfw1jqb2vZEscC0OcGkgSJaDBz5rWKXJU/0jGbkou1+2dphh0+aNROF7SNDl57Fc58I8SdVpAOe17mucJDsRhkAgwOozmcx4X7zGY+n2K6mrVHKtqy5cUFz0KrdCFXVLrZcUpJAavb4NcAjG9ICRZaFzpITVehAWKbdiDMusWSnTaBmkqNAxIT1FhjNWmM2X59Fuo8QoinCDUYc1egsn88LEpgKxToDnfiY4amSo3XeyvviQBz55SuWqgAqIqzOXYyKqYtrR7hiDSUC0pyRPNeg8MtW4Bpok1vQ0tHO8N4U54l09yv8AgVP5bn0zvD2z0ycPY+atqFFo0Ck62B2Vwi00ykqOG+IbZuI0nSXPe5wj/ud2VaWvD/l2zGuiR9Q2k5/dE4/wlz3fM1LWwMMzIJIJ6Z+ierdpju4H0T9r9HoynFqLXfk5S4tIMsc5uZOGGubJMmMQkZk6FV9WnVP9bPGmT7PCtrmrEJTECcz39Vm5M1jGIfg1jDjWe7ESA0OgNa1o2aO/vPoi8Wt21Gte0w9jpBADokEGRuCJB+2qpuIuqdksqODWCA0QAZ/UCDKjY3FZ1QOD8LBq0BvaHUkE+AITV9g66GKNN43pn/Q4emI+6srRj39l7mgHIhjC0wdRJcfQKLWAHLRO2De2396KozleiMkIuO/+jnwnw9tKi4tiXVHkwP8AvdA9fVW1O3JdlEb9yBwKzLaMT9TnO8HFW9KnhGsrsUqimcGSlJpEatEKouaQBVjdV4Coq14CYXFk4kWXVk0EI1xQBCSsq6eZWBVRSqhClIYTBTtMLHU5WRCpRoYG4yzUGOG6PXbLVU1X4dFLexUWeALFR/xb+q0psdnM8UqOJkKkewntK8tmB7ZSl/SwglRGRFeTXBwHvDV31rSwsGFeWWF25jw4abjovUOC8RbUYDIVJb2NMPb13YocIVm1+SgKYOakWwFrFNDFb64DGlxbiyOWUaaGdkhYVWvZLSCHMEYZwy2Wuic4kLXFXGCNJa6NdYPquX+G7p9OjmCDSquEEQSx/b07y9KMttnTCP2kLphxkd6pbm4qYw2mzEZzkwAOZMLrOMW4cRUZm14kd+4VHa04JJ1n2WTVM6lK0IXTqrBifUpsHcT5k5nVDtbiq4YmOp1QNQ2G+UgQVZX9Ok9ha8SDtMIPDrWkwQwR9009fkpvx4NWPEy5zmOaWERk6J78iQQur4BSxvz0AM+OX5XOG2L3twNzmMl3nA7MMZO+h7+Xqqir2YZZJRpDrcjlpomToglqIw5LaD8HEymvyScISNPhrg7ErS5AFQE7qyYwQueUG5NDE6duIWmsgozzCG54KajQhllRDr14SlaphUKjxE7q71TAfFSQq97cTkFvEW6TmFq3rdqVGmDY1/BLEb+LatrXjERxlta4MpUL6wL8gVbstHOdkMk2bYt2WajFCOWb8KjDm4zzReG8JrUnS17o5LsbanOyd/hhGipRTHQjwu5ccnHNWrtEhTp4Xp95yWkY6ASqsaSCdlT8SsGspvcNHkH+0id+WZCtKbHOOcDPx8AiX9EPY5hyByHSN+qlY7TZrjk1JX0efsv3MBYTkTIHI9EN17kWuGezhrMeqhxOg6m8scII06jYg8iknPWFtaZ6FJ7Rqpmi2tu5zob+B/hRgEJuxbBlWpIhpnSW7m0KfZgvIjFuT06BdDwh0UmA6kEnxJP3XGulzmtldlSoEAN5ADyCrlfRy51xS/I854hLUaskhYWHmiUacK49o57E7/6m96fpaJK+ZmOhTYd2fBXxTbYrB3DgkWugpS5vYcROiEbrqsJPdiseqOBQrlhwlIsvQJlMNvmu0KVphZWMsjM9Va02w3NSYQVUcdvMDThOaXFeAscxDmsXKYbg5555+axKiuR6NQZGqK5oKI6keSA+k8aBauLAZpMA0RS5LMx8ipOBGs9wVxT8DAVHEvACbc+BzKA6qBoIHP8AO6C58rWMeI1Em5857jPP1WqlSRPkoUnZwhOMEjyVIYjxSwZWaQ7Jw+lw1B+46LibuxfTfheI5H+kjm07hd+4pa6t2vbgeJHqDzB2KyyYlLa7NseVx0+jiG0yNExSOGJRuKcOfR7X1M2dy5B4279FU3F1A8FyOLTpnbHjJWjoOEPL6zGAadt55NH5MDx6LuxVGm/73XO/DnDhRpic3vDXvdzkZNHQA+53V49oI9/sV3YcK40zz881KWukMVHoNKqcRBQrevBwuTLKYlEsbi7RgAu35DvRcfZ8EvfiAO9TH0eClPbA5a/MvJ6oNeuG5pm5tXPeY5qJ+H3PHacVzN7F2V1zcS3JT4MwmSSrNnw8RkTKYqWYptlo01SfYJAMLyYae9I8RsHEtc46EEhW3Cn4iSQi8UfIgBW4+QYFjGwM9gsSuALFNBZ3KhUqgarCUhXcCSTrouw0oZNcH6T+UrUruGoy9VXvJBkGERl1ORTsdDJfP5QiY7vZBd2e0DLTr06orikMmHZqD9+mfhuhsdq3cZt6hbD90AbInPRCIhTJI0/wtF+48VQgLxIIIkEQQdCORC8z4vTwPqMByDyG9BsOpXqOEHohUbFjHF7WNDnGXOgYie/VRKHI1xZOFkOA3OO3pPOpY0H+5oAPqFZUHzIK07SUG3qQ4jnotVoxluyVZsZ8svDZGZcwJOY3596HV2OxyKCzIwVVk0WTKwcJ1HP8hE+YI2KpGPwPjY7J5j0afYnGh6lgcYwiddkcUxyCqqNxheT3DvVo18iQs5RS3Q0b+WOQQ327Tq0eSnKyVFL0VQFliwaNHktPsGHVoR5WSil6ChX+V0/0BYmpWIqPoKIVnQ1VdV6sb0wIVPUcqY0Qc5Ce0HoVtzlAlIZKlcFpwu38j/lHY8RA2+n+3by0SboIgqNvUglp1BB7w7KfMBADdQ6OGo9t1Jpz6HNCacyFjTGXLMdxQILrvB0WiOflGvcVpxzB5ozY5H7KgBFhGYKk2od1PZDlADLT2UsWgnNEaclpwzCYggOUT5yUF8zHiPwihDrEghMEBvee4zUBdSQ0HtCCe4zHsVC9fAB5GD3HJL27Ye93Rvk2Rl6qb2OtFjTfJJ65fcqwsLoTGx32noqOm6cvPr/j3TjDnP78AqTvQmjoSoqNN8tB5hblQxm5WSoytykBuVijiWIADfFUlw4g5qzv3bqlqvcNDI5HMJsEaNRaOWhLfUeRQXVObP8Aafysa/k4jo5uIJFBXVY+oZfqZ926hCe/ttIIIcHNBGhyxD2RWtO0eBPsfykr9hYA+IAe0uA01AxDkc8+kpoRZufoeYCmXZg+B7ilaFTEz+1xafDT0g+KniySAYaciOSLSc46Qk3VIz7j+UWlUAOc+/UfdUA40blCeFnzp2gdVt+YlAgbndnxRcUgFBdoVGm6Mk/ADcoVcmJWw5BruMIFQreGWH96FV7K3YJnNwaB/qLifRS4vVIovwmHQQ08nEZHzVTwHiLKlNlQkRhEf3Zg5dIPmk+rKW3R09rTMcup1Pgm/lqtt+LU8QaTE6GeQnwTVPijHODGwCdJGvcUlKPsqWOXo6Lh7ZYJ2JCY+SOqqrK4IcM8tD+VZm4aqaRls38oc1p1LqoG55BQdcEqdD2blYhYliQxW7eDkcuqrn25OhB8U9cAHKVXVLaOfggaIG2f+kqTbd24habTjc+a2ATuUATaIUnMDmlrhIIIIO4OoWgFsFAFZbdl76Z1ycOuUT5AIrXofFTgeyqOeB3cZj7oFSuJ1TY0OBwIjl7HVQp1Ppz5eYJafuq9980HXyURdgtPMEkdQVPNey+Equi4q1NpPij2T5bCRouBkNG/iRGvdKKx5bLhGsCPX1lNMhoceoNQaDyZlFaVQqCF8CSUvc14B2AQr5/ZK5a84k53YxEjTu/JSlJJFwg5PQ3xutjYGNdAdmSNQNsuf4VLSDaDG06bYjJrdSZ3J7+alUYR9DcR0GYHnKlbsLJLwC931Hbo0dAuaU29eDthiUf7C04aCXkFzgQSMmtHJse+6zhVdwf8wmGj6Acy6dXZ6D98kW34TWrZ/KdgByDgGB/U4olunf3K2/8ATtd8F2BuefazA6QCPVOMZPwEskVptF9wm7dUph7hBkjLeN1d0Whw6qstrUMY1gaeyIyOXnuU2x8Z5jyXZFapnmTdybiNmh1UDbnmgPu3DbLnBURxFJqPkn7hj5B5rEL+Yjkto+0f3Ab23AOscjqP8JdrD+sev4VjetOEAjmqmCFmaIObUncHxQ3UyNvJYKxAyQjdNnXCfRAGyoyph7Xbg+MFRfROozToCv4zTL6L2jXCS3vaJHtHiuItrtzwJJK76q7I8x7Lza2IaMM6EjyMQss11o6fp0ndl2wCMyiMrNG6psY3JRm3DQIEk/vcrlaOuy6p12lNMuo3XPNuOkIja0oUpITUX4OhZxGN0QcT6rnQ9QfXVrNJEPFF+C6v3GpmKmDb6ZEeYUOH/D1NzgHVnTs3ABJ1ycXGT0VOLnZMNuctfXfYjqq+ZP8AkrF8dL7XR1tD4bot1L39C6B/+QD6qzt7RjPoY1p7s/M5qo4JxgVBge6KjRroHt2d+eR71bF/+V1w4VcUcM3O6bGDUUTWSzrmMj5qFRyuyKGHVAcicklUcWnIyNx0WRGZ8kO4fIkZR7JWCRGhdPY76iWn9+acrtGIwqpj57Pl3q3tLYvaHSAIjxGSmTbQ6SF8SxWH8ub+v2W1FMLRZ8RbLZ5GVQ1HwrZlF0xikHI9yp6jYJaeqpggb6kiBukn2ru9TeIUWXRb1SKC29qU7UrhjcIzJ1Sn8x2GSXILjJVCGA4FsAHeSTMDp0XmVxZVmPeHMfAe5xdhJbgc4lhDhlEEbr0trJhuKAJJHPYeA/CjcF8tAgNkDPl0HclKKkjTHPizz+rZPY0PqMc0HQuaQPVQa8L1EOmS7TSCq294Lb1NWNaf1M7J9Mj4rF4fTNV9R7RwLRJkomOFbcS+HKjATTe1zR+uWmO8Ag+QVNacPqluN7QJJhsnMA/UTlrqpWJvTL+WPaJPuJS7qpQ+LXAo4XYHYScJE5gxOU66FQt71lT6HCeRyPkVMsfF0VHIpBfnIja5QixQeyNFHFFWNsunAhwMOBkEbfkdF2vw7xj51PMAPYcDht0PcQvOXkhWHwrxDBcYDpUGH/U3Nv3HitsT4ujHMuSs9KcZUKdSDhPgfcJeo8kTKE2pmF1Ucg88obn7c8ihGqoPdogDTqZ1CPXvHgBrThyBcB+o5+0KDKmcLLkdt3fHkI+yzk6RSA/Md+o+axShYsyjtmW7siSFT8VZDieRjw1Hp7Lo1VcXpaHZ3ZPfqD7rVoyT2c+/NI3Aw6pquIMIBugMnNDgkWIzyTFC4cezE9dIHU8lp9zT2Yf9yXfck5DIcgqENvrRk095/eyE2sMbZJJnyShcln1CHA8iD5FAzqK79vFYx+yC90x3KTckCJPZLXA7iEGtQbGmyK6pGaGT/Ue/uSoZxvxjajAxu5eT4BpH/kFxb+HZrquNcRFapiGTGjCwdOfj+FXtE7Lnk3y0dUF9uxWydUZkTibyOZjoVbvpdkPGbD/UBl3Hke9DtqGIgAT1VpbFzKhDfpORadMt+9aRx8lsmU0uimc1I3FMiHDIgggjYgyD5ruRYUKsyzC6c4lh75bEquv/AIaYBk94HIFpHq1L4pJi+VPsv+AX4r0muOpGY5OGTh55orsiRyXPfD3Dn25Lg9xY6Dgdh1/UIGRhdJXGIy0EyB4d63j+TCXegTHqYPieS0LV5iAR3D7pqh8OvdBwxO8mfT8ptokhw23c94B5ye4K5fwU5nFJOaWs6Jp1cBBECc8yep+wV0KizdMG2ir/AJQVtWuM81iOKC2WaW4g3/pv7lixWQchefYKrrbrFiRqJrYWLEwMKUrrFiAL+2+lv9o9giMOZWLECMdqkfiOoW274MZEeZg+6xYpl0yl2jgWaKysaYiY3W1ixx9nRPotuHME6LbB2/FbWLqiczGamRP+n2TVTOnnnp7rFicugROnv+9lc/Cn/vO/sd7tWliP8SWdNxGkC0EiYc33CbCxYsl2yfBz95/8o/2N9ymGrFiSGTWlixAz/9k=" alt="our chef">
    <p>order right now for a 30% sales in the next 3 days<p>
    </div>
    </div>
    </div>`


const addContactPageContent = `<div id = "page">
<div class = "Contacts">
<div class = "number">📞123 456 789</div>
<div class = "location">🏠Germany random place 42</div>
<div class = "email">💼thisistotallymyemail@gmail.com</div>
<img class = "map" src= "https://github.com/Florin12er/Restaurant-page/blob/main/Screenshot%20from%202023-10-22%2020-02-58.png?raw=true"
</div>
</div>`
;

container.innerHTML += addHomePageContent;


const buttonHome = document.getElementById("home");
const buttonMenu = document.getElementById("menu");
const buttonContact = document.getElementById("contact");
const page = document.querySelector("#page");


 buttonHome.style.borderBottom = "solid white 3px";

buttonHome.addEventListener("click", () => {
    page.innerHTML = "";
    buttonContact.style.borderBottom = "";
    buttonMenu.style.borderBottom = "";
    buttonHome.style.borderBottom = "solid white 3px";
    return(page.innerHTML += addHomePageContent);
    
})

buttonMenu.addEventListener("click", () => {
    page.innerHTML = "";
    buttonHome.style.borderBottom = "";
    buttonContact.style.borderBottom = "";
    buttonMenu.style.borderBottom = "solid white 3px"
    return(page.innerHTML += addMenuPageContent);

})

buttonContact.addEventListener("click", () => {
    page.innerHTML = "";
    buttonContact.style.borderBottom = "solid white  3px"
    buttonHome.style.borderBottom = "";
    buttonMenu.style.borderBottom = "";
    return (page.innerHTML += addContactPageContent);
});

