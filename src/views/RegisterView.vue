<template>
    <div class="register-view">
        <motion.div class="container" id="registerContainer" :inViewOptions="{ once: true }"
            :initial="{ opacity: 0, y: -30 }" :whileInView="{ opacity: 1, y: 0 }"
            :transition="{ delay: 0, duration: 0.6 }">

            <!-- Logo -->
            <!-- <div class="logo-container">
                <svg width="44" height="54" viewBox="0 0 84 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M83.7614 47.8876V93.4445C83.7614 70.3184 73.7177 48.1065 41.8871 48.1065C10.0565 48.1065 0 70.3184 0 93.4445V47.8876H83.7485H83.7614Z" fill="#CCB478"/>
                    <path d="M83.7614 0V47.8875H0V0C0 23.1261 10.0436 47.6558 41.8871 47.6558C73.7306 47.6558 83.7614 23.1132 83.7614 0Z" fill="#FDF0B7"/>
                </svg>
            </div> -->
            <div class="logo-container">
                <img src="@/assets/img/login/logo.svg" alt="" style="width: 44px;cursor: pointer;"
                    @click="router.push({ name: 'home' })">
            </div>

            <h1>Create Account</h1>

            <!-- STEP 1 -->
            <motion.div id="step1" :initial="{ opacity: 0, x: -40 }" :whileInView="{ opacity: 1, x: 0 }"
                :transition="{ delay: 0, duration: 0.6 }">
                <div class="form-group">
                    <label>Email *</label>
                    <input id="email" type="email" placeholder="Enter your email" required>
                </div>

                <div class="form-group">
                    <label>Password *</label>
                    <input id="password" type="password" placeholder="Create a password" required>
                </div>

                <div class="form-group">
                    <label>Country / Region *</label>
                    <select id="country" required>
                        <option value="">Select your country</option>
                        <option>Afghanistan</option>
                        <option>Albania</option>
                        <option>Algeria</option>
                        <option>Andorra</option>
                        <option>Angola</option>
                        <option>Antigua and Barbuda</option>
                        <option>Argentina</option>
                        <option>Armenia</option>
                        <option>Australia</option>
                        <option>Austria</option>
                        <option>Azerbaijan</option>
                        <option>Bahamas</option>
                        <option>Bahrain</option>
                        <option>Bangladesh</option>
                        <option>Barbados</option>
                        <option>Belarus</option>
                        <option>Belgium</option>
                        <option>Belize</option>
                        <option>Benin</option>
                        <option>Bhutan</option>
                        <option>Bolivia</option>
                        <option>Bosnia and Herzegovina</option>
                        <option>Botswana</option>
                        <option>Brazil</option>
                        <option>Brunei</option>
                        <option>Bulgaria</option>
                        <option>Burkina Faso</option>
                        <option>Burundi</option>
                        <option>Cabo Verde</option>
                        <option>Cambodia</option>
                        <option>Cameroon</option>
                        <option>Canada</option>
                        <option>Central African Republic</option>
                        <option>Chad</option>
                        <option>Chile</option>
                        <option>China</option>
                        <option>Colombia</option>
                        <option>Comoros</option>
                        <option>Congo (Congo-Brazzaville)</option>
                        <option>Costa Rica</option>
                        <option>Croatia</option>
                        <option>Cuba</option>
                        <option>Cyprus</option>
                        <option>Czechia (Czech Republic)</option>
                        <option>Denmark</option>
                        <option>Djibouti</option>
                        <option>Dominica</option>
                        <option>Dominican Republic</option>
                        <option>Ecuador</option>
                        <option>Egypt</option>
                        <option>El Salvador</option>
                        <option>Equatorial Guinea</option>
                        <option>Eritrea</option>
                        <option>Estonia</option>
                        <option>Eswatini</option>
                        <option>Ethiopia</option>
                        <option>Fiji</option>
                        <option>Finland</option>
                        <option>France</option>
                        <option>Gabon</option>
                        <option>Gambia</option>
                        <option>Georgia</option>
                        <option>Germany</option>
                        <option>Ghana</option>
                        <option>Greece</option>
                        <option>Grenada</option>
                        <option>Guatemala</option>
                        <option>Guinea</option>
                        <option>Guinea-Bissau</option>
                        <option>Guyana</option>
                        <option>Haiti</option>
                        <option>Honduras</option>
                        <option>Hungary</option>
                        <option>Iceland</option>
                        <option>India</option>
                        <option>Indonesia</option>
                        <option>Iran</option>
                        <option>Iraq</option>
                        <option>Ireland</option>
                        <option>Israel</option>
                        <option>Italy</option>
                        <option>Jamaica</option>
                        <option>Japan</option>
                        <option>Jordan</option>
                        <option>Kazakhstan</option>
                        <option>Kenya</option>
                        <option>Kiribati</option>
                        <option>Kuwait</option>
                        <option>Kyrgyzstan</option>
                        <option>Laos</option>
                        <option>Latvia</option>
                        <option>Lebanon</option>
                        <option>Lesotho</option>
                        <option>Liberia</option>
                        <option>Libya</option>
                        <option>Liechtenstein</option>
                        <option>Lithuania</option>
                        <option>Luxembourg</option>
                        <option>Madagascar</option>
                        <option>Malawi</option>
                        <option>Malaysia</option>
                        <option>Maldives</option>
                        <option>Mali</option>
                        <option>Malta</option>
                        <option>Marshall Islands</option>
                        <option>Mauritania</option>
                        <option>Mauritius</option>
                        <option>Mexico</option>
                        <option>Micronesia</option>
                        <option>Moldova</option>
                        <option>Monaco</option>
                        <option>Mongolia</option>
                        <option>Montenegro</option>
                        <option>Morocco</option>
                        <option>Mozambique</option>
                        <option>Myanmar</option>
                        <option>Namibia</option>
                        <option>Nauru</option>
                        <option>Nepal</option>
                        <option>Netherlands</option>
                        <option>New Zealand</option>
                        <option>Nicaragua</option>
                        <option>Niger</option>
                        <option>Nigeria</option>
                        <option>North Korea</option>
                        <option>North Macedonia</option>
                        <option>Norway</option>
                        <option>Oman</option>
                        <option>Pakistan</option>
                        <option>Palau</option>
                        <option>Palestine State</option>
                        <option>Panama</option>
                        <option>Papua New Guinea</option>
                        <option>Paraguay</option>
                        <option>Peru</option>
                        <option>Philippines</option>
                        <option>Poland</option>
                        <option>Portugal</option>
                        <option>Qatar</option>
                        <option>Romania</option>
                        <option>Russia</option>
                        <option>Rwanda</option>
                        <option>Saint Kitts and Nevis</option>
                        <option>Saint Lucia</option>
                        <option>Saint Vincent and the Grenadines</option>
                        <option>Samoa</option>
                        <option>San Marino</option>
                        <option>Sao Tome and Principe</option>
                        <option>Saudi Arabia</option>
                        <option>Senegal</option>
                        <option>Serbia</option>
                        <option>Seychelles</option>
                        <option>Sierra Leone</option>
                        <option>Singapore</option>
                        <option>Slovakia</option>
                        <option>Slovenia</option>
                        <option>Solomon Islands</option>
                        <option>Somalia</option>
                        <option>South Africa</option>
                        <option>South Korea</option>
                        <option>South Sudan</option>
                        <option>Spain</option>
                        <option>Sri Lanka</option>
                        <option>Sudan</option>
                        <option>Suriname</option>
                        <option>Sweden</option>
                        <option>Switzerland</option>
                        <option>Syria</option>
                        <option>Tajikistan</option>
                        <option>Tanzania</option>
                        <option>Thailand</option>
                        <option>Timor-Leste</option>
                        <option>Togo</option>
                        <option>Tonga</option>
                        <option>Trinidad and Tobago</option>
                        <option>Tunisia</option>
                        <option>Turkey</option>
                        <option>Turkmenistan</option>
                        <option>Tuvalu</option>
                        <option>Uganda</option>
                        <option>Ukraine</option>
                        <option>United Arab Emirates</option>
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>Uruguay</option>
                        <option>Uzbekistan</option>
                        <option>Vanuatu</option>
                        <option>Vatican City</option>
                        <option>Venezuela</option>
                        <option>Vietnam</option>
                        <option>Yemen</option>
                        <option>Zambia</option>
                        <option>Zimbabwe</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Recommendation Code</label>
                    <input id="recCode" type="text" placeholder="Optional">
                </div>

                <button id="nextBtn" disabled>Next</button>
            </motion.div>

            <!-- STEP 2 -->
            <motion.div id="step2" class="hidden" :initial="{ opacity: 0, x: 40 }" :whileInView="{ opacity: 1, x: 0 }"
                :transition="{ delay: 0, duration: 0.6 }">
                <div class="form-group">
                    <label>First Name *</label>
                    <input type="text" placeholder="Enter first name">
                </div>

                <div class="form-group">
                    <label>Last Name *</label>
                    <input type="text" placeholder="Enter last name">
                </div>

                <div class="form-group">
                    <label>Date of Birth *</label>
                    <input type="date">
                </div>

                <div class="form-group">
                    <label>Address *</label>
                    <input type="text" placeholder="Street, City, ZIP">
                </div>

                <div class="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" placeholder="Enter phone number">
                </div>

                <div class="form-group">
                    <label>Passport / ID Verification *</label>
                    <input type="text" placeholder="Enter passport/ID number">
                </div>

                <button id="backBtn">Back</button>
                <button @click="router.push({ name: 'home' })">Submit</button>
            </motion.div>

        </motion.div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { motion } from 'motion-v'
import router from '@/router';

onMounted(() => {
    /* Step 1 validation */
    const email = document.getElementById("email") as HTMLInputElement | null;
    const password = document.getElementById("password") as HTMLInputElement | null;
    const country = document.getElementById("country") as HTMLSelectElement | null;
    const nextBtn = document.getElementById("nextBtn") as HTMLButtonElement | null;
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const backBtn = document.getElementById("backBtn") as HTMLButtonElement | null;

    if (!email || !password || !country || !nextBtn || !step1 || !step2 || !backBtn) return;

    const emailInput = email;
    const passwordInput = password;
    const countrySelect = country;
    const nextButton = nextBtn;

    emailInput.addEventListener("input", validateStep1);
    passwordInput.addEventListener("input", validateStep1);
    countrySelect.addEventListener("change", validateStep1);

    /* Step switching */
    nextButton.addEventListener("click", () => {
        step1.classList.add("hidden");
        step2.classList.remove("hidden");

    });

    backBtn.addEventListener("click", () => {
        step2.classList.add("hidden");
        step1.classList.remove("hidden");

    });

    function validateStep1() {
        nextButton.disabled = !(emailInput.value.trim() && passwordInput.value.trim() && countrySelect.value.trim());
    }
})




</script>

<style lang="scss" scoped>
.register-view {
    margin: 0;
    background: var(--bg-color-1);
    background-image: url('@/assets/img/login/education.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    backdrop-filter: blur(8px);
    font-family: Arial, sans-serif;
    color: var(--text-color);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 16px;
    /* Rule of 8 */
}

.container {
    width: 100%;
    max-width: 420px;
    background: var(--surface-color);
    padding: 32px;
    /* Rule of 8 */
    border-radius: 16px;
    border: 1px solid var(--surface-border-color);
    box-sizing: border-box;
}

/* Logo */
.logo-container {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 24px;
    /* Rule of 8 */
}

/* Headline */
h1 {
    text-align: center;
    margin-bottom: 32px;
    /* Rule of 8 */
    font-size: 28px;
}

/* Form fields */
.form-group {
    margin-bottom: 24px;
    /* Rule of 8 */
    display: flex;
    flex-direction: column;
    text-align: left;
    /* Labels aligned left */
}

label {
    margin-bottom: 12px;
    font-size: 14px;
    color: var(--primary-color);
}

input,
select {
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid var(--primary-color);
    background: var(--bg-color-1);
    color: var(--text-color);
    font-size: 16px;
    outline: none;
}

input::placeholder {
    color: var(--gray-color);
}

/* Select arrow */
select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
    background-image:
        linear-gradient(45deg, transparent 50%, var(--text-color) 50%),
        linear-gradient(135deg, var(--text-color) 50%, transparent 50%);
    background-position:
        calc(100% - 18px) calc(50% - 2px),
        calc(100% - 12px) calc(50% - 2px);
    background-size: 6px 6px, 6px 6px;
    background-repeat: no-repeat;
    padding-inline-end: 40px;
}

/* Buttons */
button {
    width: 100%;
    padding: 12px 32px;
    /* Rule of 8 */
    margin-top: 16px;
    background: transparent;
    color: var(--text-color);
    border: 1px solid var(--primary-color);
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background: var(--primary-color);
    color: var(--text-color-dark);
}

button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
}

.hidden {
    display: none;
}

@media (max-width: 600px) {
    .container {
        padding: 24px;
    }

    h1 {
        font-size: 24px;
    }
}
</style>
