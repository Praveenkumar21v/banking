import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalancebox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = {
    firstName: "Chandu",
    lastName: "JSM",
    email:"@contact@jsmastery.pro"
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "guest"}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalancebox
            accounts={[]}
            totalBanks={1}
            totalCurrentbalance={1250.35}
          />
        </header>

RECENT TRANSACTIONS

      </div>
      <RightSidebar
      user={loggedIn}
      transactions = {[]}
      banks = {[{currentBalance: 123.50},{currentBalance: 500.50}]}
      />
    </section>
  );
};

export default Home;
