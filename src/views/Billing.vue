<template>
  <div class="billing-view h-100vh min-h-600px w-100%">
    <div class="header flex flex-row justify-between items-center">
        <h1 class="white text-30px tracking-wider">Billings</h1>
    </div>
    <p class="forth text-15px font-300 mt-10px max-w-800px leading-9">Welcome to your billing page! Here you can view and manage all of your bills in one convenient location. You can also add, edit, or delete your saved payment cards to make paying bills quick and easy. Stay organized and on top of your finances with our easy-to-use billing system.</p>
    <div class="content flex flex-col justify-start items-center mt-50px">
        <div class="credit-cards min-h-300px w-100% third-bg rounded flex flex-col justify-start items-center p-2.5rem">
            <h2 class="sub-heading text-center black text-22px">Your Cards</h2>
            <div class="credit-card missing-card flex-grow w-100% mt-12px">
                <BsCreditCard2Back class="text-150px opacity-20 mr-20px"/>
                <div class="w-100% max-w-200px ">
                    <h3 class="text-16px">You have not yet save a card with us</h3>
                    <button class="border-none px-20px py-10px mt-10px secondary-bg white">Add Card</button>
                </div>
                
            </div>
        </div>  
        <div class="bills min-h-300px w-100% third-bg rounded flex flex-col justify-start items-center mt-50px">
            <h2 class="sub-heading text-center black text-22px">Your Bills</h2>
            <div class="bills-table w-100% flex flex-col justify-start flex-grow items-center mt-20px gap-0px forth-bg rounded p-2.5rem">
                <div class="bills-header w-100% px-2rem text-center">
                    <h3>No.</h3>
                    <h3>Title</h3>
                    <h3>Description</h3>
                    <h3>Price</h3>
                    <h3>Status</h3>
                    <h3>Action</h3>
                </div>
                <div class="bills-list flex flex-col w-100% justify-start items-center mt-20px">
                    <div class="bill w-100% text-center text-16px fill px-2rem white rounded">
                        <p>3</p>
                        <p>Montly Maintenance</p>
                        <p>Montly Maintenance April/2023</p>
                        <p>RM100.00</p>
                        <p class="error">UNPAID</p>
                        <p>Pay Now</p>
                    </div>
                    <div class="bill w-100% text-center text-16px stroke px-2rem white rounded">
                        <p>2</p>
                        <p>Full Payment</p>
                        <p>Full Payment on Standard Plan</p>
                        <p>RM4500.00</p>
                        <p>PAID</p>
                        <p>Receipt</p>
                    </div>
                    <div class="bill w-100% text-center text-16px fill px-2rem white rounded">
                        <p>1</p>
                        <p>Deposit</p>
                        <p>10% Deposit</p>
                        <p>RM1500.00</p>
                        <p>PAID</p>
                        <p>Receipt</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { BsCreditCard2Back } from "@kalimahapps/vue-icons/bs";

export default {
    components: {
        BsCreditCard2Back
    }
}
</script>

<style scoped>
.billing-view {
    padding: clamp(10px, 2vw, 4rem);
    overflow-y: scroll;
}

.bills {
    padding: clamp(10px, 2vw, 2.5rem);
}

.missing-card {
    background-color: var(--forth-color);
    border: 2px dashed var(--primary-color);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.bills-header {
    display: grid;
    grid-template-columns: 1fr 3fr 3fr 3fr 3fr 2fr;
    gap: 10px;
}

.bills-header h3 {
    font-size: 16px;
    font-weight: 650;
}

.bill {
    display: grid;
    grid-template-columns: 1fr 3fr 3fr 3fr 3fr 2fr;
    gap: 10px;
}

.bill p {
    padding: 20px 2rem;
}

.fill {
    background-color: #332C39;
}

.stroke {
    color: #332C39;
}

</style>