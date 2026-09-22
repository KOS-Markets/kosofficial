<template>
    <div class="login-view">
        <motion.div class="container" id="loginBox" :inViewOptions="{ once: true }" :initial="{ opacity: 0, y: -30 }"
            :whileInView="{ opacity: 1, y: 0 }" :transition="{ delay: 0, duration: 0.6 }">
            <!-- Logo SVG -->
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

            <div class="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email">
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password">
            </div>

            <button>Log In</button>
        </motion.div>
    </div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import router from '@/router';

</script>

<style lang="scss" scoped>
.login-view {
    margin: 0;
    background: var(--bg-color-1);
    background-image: url('@/assets/img/login/education.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    ;
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
    max-width: 380px;
    background: var(--surface-color);
    padding: 32px;
    /* Rule of 8 */
    border-radius: 16px;
    border: 1px solid var(--surface-border-color);
    box-sizing: border-box;
}

/* Logo */
.logo {
    width: 64px;
    height: 64px;
    margin: 0 auto 24px;
    display: block;
}

/* Headline */
h1 {
    text-align: center;
    margin-bottom: 32px;
    font-size: 28px;
}

/* Form fields */
.form-group {
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    text-align: left;
    /* Labels aligned left */
}

label {
    margin-bottom: 12px;
    font-size: 14px;
    color: var(--primary-color);
    text-align: left;
}

input {
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

/* Button */
button {
    width: 100%;
    padding: 12px 32px;
    margin-top: 16px;
    background: transparent;
    color: var(--text-color);
    border: 1px solid var(--primary-color);
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
}

.logo-container {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 24px;
    /* space between logo and headline */
}

button:hover {
    background: var(--primary-color);
    color: var(--text-color-dark);
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
