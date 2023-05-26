import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app - Test 1!
    
    
                     Monetary Tightening and U.S. Bank Fragility in 2023:
               Mark-to-Market Losses and Uninsured Depositor Runs?1


                                       First Version: March 13, 2023
                                        This Version: April 5, 2023



                    Erica Jiang, Gregor Matvos, Tomasz Piskorski, and Amit Seru
                                                   Abstract
We analyze U.S. banks’ asset exposure to a recent rise in the interest rates with implications for financial
stability. The U.S. banking system’s market value of assets is $2.2 trillion lower than suggested by their
book value of assets accounting for loan portfolios held to maturity. Marked-to-market bank assets have
declined by an average of 10% across all the banks, with the bottom 5th percentile experiencing a decline
of 20%. Most of these asset declines were not hedged by banks with use of interest rate derivatives. We
illustrate in a simple model that uninsured leverage (i.e., Uninsured Debt/Assets) is the key to understanding
whether these losses would lead to some banks in the U.S. becoming insolvent-- unlike insured depositors,
uninsured depositors stand to lose a part of their deposits if the bank fails, potentially giving them incentives
to run. We show that a bank’s survival depends on the market beliefs about the share of uninsured depositors
who will withdraw money following a decline in the market value of bank assets. If interest rate increases
are small such that the bank’s decline in asset values is relatively small, there is no risk of a run equilibrium.
However, for sufficiently high increases in interest rates, we have multiple equilibria in which uninsured
depositor run making banks insolvent (i.e., a “bad” run equilibrium) becomes a possibility. Banks with
smaller initial capitalization and higher uninsured leverage have a smaller range of beliefs supporting a
“good” no run equilibrium, increasing their fragility to uninsured depositor runs. A case study of the
recently failed Silicon Valley Bank (SVB) is illustrative. 10 percent of banks have larger unrecognized
losses than those at SVB. Nor was SVB the worst capitalized bank, with 10 percent of banks having lower
capitalization than SVB. On the other hand, SVB had a disproportional share of uninsured funding: only 1
percent of banks had higher uninsured leverage. Combined, losses and uninsured leverage provide
incentives for an SVB uninsured depositor run. We compute similar incentives for the sample of all U.S.
banks. Even if only half of uninsured depositors decide to withdraw, almost 190 banks with assets of $300
billion are at a potential risk of impairment, meaning that the mark-to-market value of their remaining assets
after these withdrawals will be insufficient to repay all insured deposits. If uninsured deposit withdrawals
cause even small fire sales, substantially more banks are at risk. Regions with lower household incomes
and large shares of minorities are more exposed to the bank risk. We also show that decline in banks’ asset
values eroded the ability of banks to withstand adverse credit events – focusing on commercial real estate
loans. Overall, these calculations suggest that recent declines in bank asset values very significantly
increased the fragility of the US banking system to uninsured depositor runs.



1
  Jiang is at University of Southern California (erica.jiang@marshall.usc.edu), Matvos is at Northwestern
University and NBER (gregor.matvos@kellogg.northwestern.edu), Piskorski is at Columbia and NBER
(tp2252@gsb.columbia.edu), and Seru is at Stanford GSB, the Hoover Institution, SIEPR and NBER
(aseru@stanford.edu).

                                                        1



                      Electronic copy available at: https://ssrn.com/abstract=4387676
1. Introduction
When central banks tighten monetary policy, it can have significant negative impacts on the value of long-
term assets, including government bonds and mortgages. This can create losses for banks, which engage in
maturity transformation: they finance long maturity assets with short-term liabilities—deposits. As interest
rates rise, the value of a bank's assets can decline, potentially leading to bank failure through two broad,
but related channels. First, if a bank's liabilities exceed the value of its assets, it may become insolvent. This
is particularly likely for banks which need to increase deposit rates as interest rates rise. Second, uninsured
depositors may become concerned about potential losses and withdraw their funds, causing a bank run.2
Uninsured depositors represent a significant source of funding for commercial banks, accounting for about
half of their deposits and $9 trillion of their liabilities3, which can make runs a significant risk for these
institutions.4 In fact, during the 1980s and 1990s, nearly one-third of savings and loan institutions failed
due to losses incurred from long-term fixed-rate mortgages that declined in value when interest rates surged.
This resulted in a substantial reduction in the net worth of the S&L industry. More recently, the largest bank
failure since the great recession occurred on March 10, 2023, when Silicon Valley Bank (SVB) was taken
into FDIC receivership. 92.5% of its deposits were uninsured, leading to significant withdrawals that
ultimately resulted in the bank's collapse within two days. In this paper we provide a simple analysis of all
U.S. banks’ asset exposure to a recent rise in the interest rates with implications for financial stability.
The Federal Reserve Bank responded to high inflation by increasing interest rates, which resulted in a
substantial decline in the market value of long-duration assets. From March 07, 2022, to March 6, 2023,
the federal funds rate rose sharply from 0.08% to 4.57% (Figure 1A), and this increase was accompanied
by quantitative tightening. As a result, long-dated assets similar to those held on bank balance sheets
experienced significant value declines during the same period. For instance, the exchange-traded fund that
tracks the market value of residential mortgages (SPDR Portfolio Mortgage-Backed Bond ETF—SPMB)
declined by more than 10% (Figure 1B) from 2022:Q1 to 2023:Q1. Similarly, the market value of
commercial mortgages indicated by the iShares CMBS ETF declined by more than 10% during this time.
Long maturity treasury bonds were particularly affected by monetary policy tightening, with 10-20 year
and 20+ year Treasury bonds losing about 25% and 30% of their market value, respectively, as suggested
by iShares Treasury ETF (see Figure 1C). Overall, as is evident, the FED's monetary policy tightening
caused significant value declines in long duration assets.
To assess the financial stability of U.S. banks, we use bank call report data capturing asset and liability
composition of all US banks (over 4,800 institutions) combined with market-level prices of long-duration
assets.5 Our analysis proceeds in multiple stages. Firstly, we examine losses on banks' assets including their
loan portfolios held to maturity, which have not been marked-to-market, as well as securities linked to real
estate (such as mortgage-backed securities (MBS), commercial mortgage-backed securities (CMBS), US
Treasuries, and other asset-backed securities (ABS)). These assets comprise more than two-thirds of bank
assets (72% of $24 trillion dollars). Adjusting these assets to their market values, our findings indicate that
bank assets decline on average by 10%, with the bottom 5th percentile experiencing a decline of
approximately 20%. The market value of U.S. banking system assets is $2.2 trillion lower than suggested



2
  There is a significant body of economic theory, going back to Diamond and Dybvig (1983), that aims to understand
banks’ role in liquidity transformation and their resulting exposure to depositor runs.
3
  See Table 1 and Figure A1 in the Appendix for composition of bank assets and liabilities in the aggregate.
4
  See Egan et al. (2017) and Chen et al. (2022).
5
  For assessments of U.S. banks’ exposure to credit and interest rate risk in periods preceding the 2022-2023 monetary
tightening episode see, among others, Begenau et al. (2015), Kelly et al. (2016), Drechsler et al. (2017, 2021), Egan
et al. (2017), Atkeson et al. (2018), Begenau and Stafford (2019), and Xiao (2020).

                                                          2



                       Electronic copy available at: https://ssrn.com/abstract=4387676
by their book value. Interestingly, SVB does not stand out as much in the distribution of marked-to-market
losses, with about 10% of banks experiencing worse marked-to-market losses on their portfolio.
Next, we analyze how this decline in assets impacts the solvency and run incentives of banks. We begin by
assessing banks' funding structures before the recent monetary tightening. While SVB was reasonably well-
capitalized from a capital perspective, with 10% of banks having less capital than SVB, its use of uninsured
deposits stood out. It ranked in the 1st percentile of the distribution in uninsured leverage, suggesting that
over 78% of its assets were funded by uninsured deposits.6 In other words, SVB’s bank liabilities were
more prone to runs than those of other banks.
We then illustrate in a simple stylized framework how uninsured leverage (i.e., Uninsured Debt/Assets) can
be a key to understanding whether a bank will become insolvent. Unlike insured depositors, uninsured
depositors stand to lose a part of their deposits if the bank fails, potentially giving them incentives to run.
Consequently, a bank’s survival depends on the market beliefs about the share of uninsured depositors who
will withdraw (or equivalently ask for a higher deposit rate), following a decline in the market value of
bank’s assets. If interest rate increases are small such that the decline in bank’s asset values are relatively
small, we are in a “good” equilibrium with no possibility of a run. However, for sufficiently high increases
in interest rates, a “bad” equilibrium with uninsured depositor run making banks insolvent becomes a
possibility. For banks with smaller initial capitalization and higher uninsured leverage, the range of
sustainable beliefs supporting a “good” equilibrium without uninsured depositor run is smaller, increasing
the bank fragility. In other words, in such situations a bank remains solvent only if a relatively small share
of the uninsured depositors is expected to withdraw, otherwise there will be a run on the bank.
Finally, using the bank balance sheet data, we analyze several scenarios that combine the analysis of
declines in marked-to-market asset values, along with banks’ capitalization, their uninsured leverage, and
the beliefs about the share of uninsured depositors withdrawing. This analysis informs us about the impact
of recent rise in interest rates on the solvency and run incentives of banks.
We conclude by discussing several extensions of our framework. First, we illustrate that banks were not
likely to have hedged a significant part of the decline of their assets due to raise in interest rates. Second,
we compute the extent to which decline in banks’ asset values quantified above eroded their ability to
withstand adverse credit events – focusing on commercial real estate loans. Finally, we show that the risk
in the banking sector due to monetary tightening is not spread uniformly across space, with higher exposure
in regions with more minorities and lower income households.
2. Banks’ Hidden Losses: “Marking to Market” Bank Assets
To understand the impact of interest rate increases on banks’ asset values, we begin by examining bank
balance sheets, following Jiang et al. (2020). Since a substantial portion of bank portfolios, specifically
loans held to maturity, are not marked to market, we rely on exchange-traded funds (ETFs) across various
asset classes to conduct our analysis. For the average bank, real estate loans account for approximately 42%
of their assets (Table A1). Moreover, securities linked to real estate (such as mortgage-backed securities
(MBS), commercial mortgage-backed securities (CMBS), treasuries, and other asset-backed securities
(ABS) constitute approximately 24% of the average bank's assets. As these assets represent more than half
of the total assets for a typical bank, we concentrate on marking them to market, which may result in
underestimating the effect on the remaining portion of the bank balance sheet, which we leave unchanged.
2.1 Methodology and Data



6
    See Jiang et al. (2020) for a longer analysis of uninsured leverage in the U.S. banking and shadow banking system.

                                                           3



                         Electronic copy available at: https://ssrn.com/abstract=4387676
We mark bank assets to market in three steps.
    1) We obtain the asset maturity and repricing data for all FDIC-insured banks in their regulatory
       filings (Call Report Form 031 and 041) in 2022:Q1. Banks are required to report the values of
       residential MBS and non-residential MBS securities (Schedule RC-B). They are also required to
       report the values of loans that are secured by first liens on 1- 4 family residential properties and all
       loans and leases excluding loans that are secured by first liens on 1-4 family residential properties
       (Schedule RC-C) by maturity and repricing breakdowns.7
    2) We use traded indexes in real estate and treasuries to impute the market value of real estate loans
       held on bank balance sheet.8 Longer duration fixed income assets were affected more by interest
       rate increases, so we want to adjust the market values of loans based on their maturity. Because of
       limited maturity information across RMBS maturities, we use one RMBS exchange traded fund,
       and then adjust across maturities using treasury prices. As a baseline, we use changes in the market
       price of the U.S. Treasury bonds and RMBS from 2022:Q1 to 2023:Q1. To adjust for maturity, we
       use the iShares U.S. Treasury Bond ETFs and the S&P Treasury Bond Indices across various
       maturities that match the maturity and repricing breakdowns in the call reports. For each of these
       ETFs and indices, we calculate the price declines since 2022:Q1, plotted in Figure 1.
    3) We compute the mark-to-market value loss as

         𝐿𝑜𝑠𝑠 = % 𝑅𝑀𝐵𝑆 𝑚𝑢𝑙𝑡𝑖𝑝𝑙𝑖𝑒𝑟 × (𝑅𝑀𝐵𝑆! + 𝑀𝑜𝑟𝑡𝑔𝑎𝑔𝑒! ) × Δ𝑇𝑟𝑒𝑎𝑠𝑢𝑟𝑦𝑃𝑟𝑖𝑐𝑒!
                    !
                           + 𝑇𝑟𝑒𝑎𝑠𝑢𝑟𝑦 𝑎𝑛𝑑 𝑂𝑡ℎ𝑒𝑟 𝑆𝑒𝑐𝑢𝑟𝑖𝑡𝑖𝑒𝑠 𝑎𝑛𝑑 𝐿𝑜𝑎𝑛𝑠! × Δ𝑇𝑟𝑒𝑎𝑠𝑢𝑟𝑦𝑃𝑟𝑖𝑐𝑒! ,
         where t indicates the maturity and repricing breakdowns: less than 1 year, 1-3 years, 3-5 years, 5-
         10 years, 10-15 years, and 15 years or more. Δ𝑇𝑟𝑒𝑎𝑠𝑢𝑟𝑦𝑃𝑟𝑖𝑐𝑒! is the market price change of
         Treasury bonds with maturity t from 2022:Q1 to 2023:Q1 that we obtained in the second step.
         RMBS and residential mortgages have additional risk due to prepayment risk. We account for this
         by constructing an 𝑅𝑀𝐵𝑆 𝑚𝑢𝑙𝑡𝑖𝑝𝑙𝑖𝑒𝑟 that uses average market price changes of RMBS and
         Treasury bonds across various maturities over this period:
                                                             Δ𝑖𝑆ℎ𝑎𝑟𝑒 𝑀𝐵𝑆 𝐸𝑇𝐹
                                𝑅𝑀𝐵𝑆 𝑚𝑢𝑙𝑡𝑖𝑝𝑙𝑖𝑒𝑟 =                                 .
                                                         ΔS&P 𝑇𝑟𝑒𝑎𝑠𝑢𝑟𝑦 𝐵𝑜𝑛𝑑 𝐼𝑛𝑑𝑒𝑥
         We then define the mark-to-market asset value in 2023:Q1 as total assets in 2022:Q1 minus the
         mark-to-market value loss defined above. In some ways, our estimates are conservative, since we
         only marked down the value of real estate loans and other assets and securities and loans discussed
         above, rather than all assets on the bank balance sheets. On the other hand, in our main analysis we
         do not account for possible interest rate hedges that banks could have entered, potentially offsetting
         decline in value due to interest rate change. In extension of our main analysis (Section 5.1), we
         show that use of hedging and other interest rate derivatives was not large enough to offset a vast
         majority of the loss in the value of U.S. banks’ assets that we quantify.
2.2 Declines in the Value of Banks’ Assets
Marking the value of real estate loans, government bonds, and other securities results in significant declines
in bank assets. Table 1 shows the aggregate losses in the US banking system and their distribution among


7
  The breakdowns are “less than three months,” “three months to one year,” “one to three years,” “three to five
years,” “five to fifteen years,” and “more than fifteen years.”
8
  Variable rate notes are recorded as maturity at the repricing date in bank call reports.

                                                          4



                        Electronic copy available at: https://ssrn.com/abstract=4387676
small, large, and GSIB banks. In total the U.S. banking system’s market value of assets is $2.2 trillion lower
than suggested by their book value of assets as of 2023:Q1.
We present the distribution of asset declines due to unrealized losses in Figure 2A. The median value of
banks’ unrealized losses is around 9% after marking to market. The 5% of banks with worst unrealized
losses experience asset declines of about 20%. We note that these losses amount to a stunning 96% of the
pre-tightening aggregate bank capitalization.
The unacknowledged losses do differ slightly across the size distribution. They are smallest for GSIBs
(Global Systemically Important Banks) at 4.6% and largest for large non-GSIB banks at 10%. Note that
there are also differences in the uses of interest rate hedges across the size distribution of banks (esp. GSIBs)
as we discuss in Section 5.1. There are substantial differences in the types of loans from which the losses
arise. For GSIBs, RMBS is the largest part of the losses, and for small banks, it is other loans.
Perhaps somewhat puzzling at first, the recently failed SVB does not stand out as much in the distribution
of marked to market losses. About 11 percent of banks suffered worse marked to market losses on their
portfolio (Figure 2). In other words, if SVB failed because of losses alone, more than 500 other banks
should also have failed.
3. The Role of Uninsured Leverage
3.1 Banking Sector and the Case of SVB
We next turn to assessing banks' funding structure before the monetary tightening. We show that SVB was
not especially thinly capitalized relative to other banks. Instead, we show that it stood out on the dimension
of uninsured leverage, making it much more run prone than other banks. Table A1 presents the funding
structure of the U.S. banking industry prior to the monetary tightening. The average bank funds 10% of
their assets with equity, 63% with insured deposits, and 27% with uninsured debt comprising 23%
uninsured deposits and 4% other debt funding.9 There was very little difference in the capitalization across
banks prior to monetary policy tightening. The 10th percentile best capitalized bank had a ratio of equity to
assets (E/A) of 14%, while the 10th percentile worst capitalized bank had 8% percent capital. Again, SVB
is not an outlier—it is at the 10th percentile of capitalization of U.S. banks.
SVB did stand out from other banks in its distribution of uninsured leverage, the ratio of uninsured debt to
assets (see Jiang et al. 2020 for a more comprehensive analysis of uninsured leverage of U.S. banking and
shadow banking sector). Banks differ significantly in the share of funding they obtain from uninsured
sources. The 5th percentile bank uses 6 percent of uninsured debt. For this bank, 94% of funding is not run
prone comprising equity and deposits.
On the other hand, the 95th percentile bank uses 52 percent of uninsured debt. For this bank, even if only
half of uninsured depositors panic, this leads to a withdrawal of one quarter of total marked to market value
of the bank. If any fire sale discounts result from these withdrawals, this can impose substantial losses on
the remaining creditors, increasing their incentives to run. SVB was in the 1st percentile of distribution in
insured leverage. Over 78 percent of its assets was funded by uninsured deposits. This fact suggests that
uninsured deposits played a critical role in the failure of SVB. We formalize this insight in a simple
framework and then illustrate its implications through several numerical scenarios.
3.2 Run Incentives and Uninsured Leverage: Simple Framework



9
 As shown in Table A1 Panel B, only less than 1% of the uninsured deposits are time deposits with time to maturity
and repricing in more than a year.

                                                        5



                      Electronic copy available at: https://ssrn.com/abstract=4387676
Unlike insured depositors, uninsured depositors stand to lose a part of their deposits if the bank fails,
potentially giving them incentives to run. We now illustrate why a bank that faces losses on its investments
and is poorly capitalized may not fail if it uses insured deposits for funding, but may fail when it uses
uninsured deposits for funding instead. Note that we use a simple and stylized setting to get the intuition
across. It does not answer the question of how banks choose the mix of insured and uninsured deposits in
their capital structure or their investments. Jiang et al. (2020) deal with these aspects in a richer model,
while emphasizing the role of “uninsured deposits leverage” for bank funding.
Basic Setup: Bank Assets and Liabilities
Consider a bank with its initial value of assets and liabilities normalized to 1. The bank holds 𝑐 share of its
assets in cash paying yield of 0. The remaining (1 − 𝑐) share of its assets are risk free perpetuities (T-bonds
with infinite maturity), paying an annual coupon 𝑟" , where 𝑟" is the risk-free rate. We note that the market
value of bank assets A is given by:
                                                           𝑟"                                                    (1)
                                          𝐴 = 𝑐 + (1 − 𝑐)      = 1.
                                                           𝑟"
To make things simple, we assume that the bank earns no rents on the liability side prior to the monetary
tightening. The bank liability is financed with (𝑙 # + 𝑙 $ ) share of its total liabilities at the deposit cost of 𝑟" ,10
where 𝑙 # is the “insured deposits leverage” and where 𝑙 $ is “uninsured deposits leverage”.11 We further
assume that 𝑙 # + 𝑙 $ = (1 − 𝑐). We note that the market value of bank debt obligations assuming deposits
stay forever at the current rate equals to:

                                       (𝑙 # + 𝑙 $ )𝑟"
                                 𝐷=                   = (𝑙 # + 𝑙 $ ) = (1 − 𝑐).                                    (2)
                                             𝑟"

The value of equity is then given by:
                                              𝐸 = 𝐴 − 𝐷 = 𝑐.                                                       (3)
We note that the E/A ratio equals to 𝑐 as well.
Basic Setup: Monetary Policy Tightening
Now suppose that because the unexpected monetary policy tightening, the new risk-free rate equals to
                                                   𝑟"                                             (4)
                                                  𝑟"%&' =
                                                    γ
where 0 < γ < 1. Given this increase in the interest rate, the “marked-to-market” value of bank assets is
lower and is now given by:
                                              𝑟"                                                         (5)
                      𝐴%&' = 𝑐 + (1 − 𝑐)            = 𝑐 + γ − 𝑐γ = 𝑐 + γ(1 − 𝑐).
                                           (𝑟" /γ)
Intuitively, the value of the bank’s cash is still the same and equal to c. But the bank’s long duration assets
are now valued at the discount γ < 1 of their prior market-value. This computation corresponds to the more
extensive “marked-to-market” analysis of assets in Table 1 and Figure 2.



10
   The cost of deposits includes the deposit rate and acquisition costs. The deposits are cheaper than the risk free-rate
due to some special value depositors attach to the money lie debt (e.g., see Jiang et al. 2020).
11
   In practice banks also finance their assets with a usually small share of long-term debt. Inclusion of such debt in the
bank capital structure would not affect our main insights.

                                                            6



                        Electronic copy available at: https://ssrn.com/abstract=4387676
Let’s first consider a case under which we compute the solvency of banks by assessing whether the marked
to market value of assets is sufficient to cover the face value all non-equity liabilities. In other words, if all
depositors withdrew their funding today (or ask for a higher deposit rate matching the increase in interest
rates), could banks repay their debts. This is akin to assuming that there is no value to banks’ deposit
franchise. We assume that when assets are liquidated, there is no additional discount due to liquidation, so
assets can be sold at their current market value. In terms of our framework this solvency condition can be
expressed as:

                𝐴%&' − 𝐷      = 𝑐 + γ(1 − 𝑐) − (1 − 𝑐) = 𝑐 − (1 − 𝑐)(1 − γ) ≥ 0.                            (6)
If this condition is satisfied bank could withstand any withdrawal of its insured and uninsured deposits.
This condition is extreme, because insured depositors may have no incentives to withdraw funds as a
function of default risk and may be content with their legacy deposit rate. On the other hand, it is a useful
benchmark to better understand the de facto capitalization of the U.S. banking sector (as done in Column 1
of Table 1). Implicitly, this calculation assumes that increasing interest rates do not decrease the value of
bank liabilities, i.e., the fed funds rate instantaneously pass-through to deposit rates.
But let’s now assume that the condition (6) does not hold so that
                                       𝑐 − (1 − 𝑐)(1 − γ) < 0,                                              (7)
that is the bank assets are below the face value of its non-equity liabilities. Despite a potentially large swing
in the value of assets, it is not yet clear whether the bank is insolvent--i.e., whether the value of its assets is
less than that of marked-to-market value of its liabilities --and whether depositors should consider running.
As we will explain below this may crucially depend on the behavior of its uninsured depositors.
Equilibria with Uninsured Depositors Runs
To simplify the economics of the problem and highlight our main ideas without losing generality, we make
two assumptions. First, the insured depositors are sticky. They remain with the bank if they obtain the
legacy deposit rate 𝑟" or till the bank’s liquidation. This is akin to assuming that the insured deposits
generate a considerable franchise value to the bank. Second, let’s assume that market participants believe
that a share 𝑠 of uninsured depositors will withdraw their money. The remaining (1- 𝑠) of uninsured
depositors will stay if the bank remains solvent, that is, if it can pay them their legacy deposit rate equal to
𝑟" . We now characterize the range of beliefs about s that are sustainable in equilibrium.

We first characterize the range of 𝑠 such that if a share of the uninsured depositors in that range withdraw
their money, the bank’s remaining assets are insufficient to service the cost of its remaining liabilities. Note
that after the s share of the uninsured depositors withdraw, the bank remaining assets are worth:
                                     𝐴%&'
                                      (   = 𝑐 + γ(1 − 𝑐) − 𝑠𝑙 $ .                                           (8)
The marked-to market value of bank’s debt (deposits) will be equal to:
                                                    𝑟"                                               (9)
                        𝐷(%&' = (𝑙 # + (1 − 𝑠)𝑙 $ ) 𝑟 = (1 − 𝑐 − 𝑠𝑙 $ )γ
                                                     "
                                                   TγU
The bank will be insolvent when the value of its marked-to-market assets is insufficient to cover the value
of its marked-to-market debt obligations (assuming no default on the debt). In other words, this situation
arises when bank is in “negative” equity position:
                                          𝐷(%&' > 𝐴%&'
                                                     (   ,                                                  (10)
which, given (8) and (9), happens if the share of the uninsured depositors running is such that:

                                                        7



                      Electronic copy available at: https://ssrn.com/abstract=4387676
                                                         𝑐                                                         (11)
                                               𝑠>
                                                     (1 − γ)𝑙 $
Let us define
                                                    𝑐                                                  (12)
                                              𝑠∗ =         .
                                                (1 − γ)𝑙 $
We have several possibilities depending on the value of 𝑠 ∗ . First, if 𝑠 ∗ ≥ 1, the bank can survive any run
by the uninsured depositors. Second, if 𝑠 ∗ < 1 there will be two possibilities. One, if uninsured depositors
believe that share 𝑠 ≤ 𝑠 ∗ of uninsured depositors will withdraw, we would be in a “good” equilibrium. The
bank can survive in this scenario -- where there is withdrawal by some uninsured depositors -- without
triggering a run due to withdrawals by the remaining uninsured depositors. Alternatively, any belief by
uninsured depositors that a share 𝑠 > 𝑠 ∗ of the uninsured depositors will withdraw is not an equilibrium,
unless 𝑠 = 1. This is because in this scenario all uninsured depositors would run, the bank would be
insolvent, and the deposit franchise would collapse (i.e., we would be in a “bad” run equilibrium). To
summarize, we have the following proposition:
                               +
Proposition 1: Let 𝑠 ∗ = (-./)1! . If 𝑠 ∗ ≥ 1, the bank can survive any withdrawal by the uninsured depositors.
If 𝑠 ∗ < 1 there are two types of equilibria:
     (i)      Good (No Run) Equilibrium: If the uninsured depositors believe that a share 𝑠 ≤ 𝑠 ∗ of the
              uninsured depositors will withdraw their money the bank will remain solvent.
     (ii)     Bad (Run) Equilibrium: Uninsured depositors believe that there will be a run on the bank with
              all uninsured depositors withdrawing money and bank becoming insolvent so 𝑠 = 1.
Note that the range of sustainable beliefs about s in a good equilibrium S ∈ [0, min (𝑠 ∗ , 1)] is -- for 𝑠 ∗ < 1
-- strictly increasing in bank capital c, and strictly decreasing with the extent of interest rate increase γ, and
the uninsured leverage 𝑙 $ . According to Proposition 1, as long as the bank has initial positive capitalization
c>0, for a sufficiently small increase in interest rates (γ close to 1), the only sustainable equilibrium is no
run equilibrium as S ∈ [0, 1]. Once interest rates increase sufficiently, we could have multiple equilibria,
with bad run equilibrium possible. The range of sustainable beliefs about s in a good “no run” equilibrium
is smaller for banks that have lower initial capitalization and that have larger uninsured leverage. In such
situations a bank remains solvent only if a relatively small share of the uninsured depositors is expected to
withdraw, otherwise there will be a run on the bank.
We note that according to Proposition 1, the case below with s = 0 is always one of the (good) equilibria.
Equilibrium with Sleepy Uninsured Depositors (s=0): Consider the case where all the uninsured depositors
are sleepy so the belief is that none of them will withdraw the money. Specifically, they do not require a
change in deposit rates offered to them in spite of the higher rates being offered in the market (say if they
invested in Treasury securities). Nor do they consider withdrawing money from a bank if it is potentially
impaired.12 In this case the market value of bank liabilities also declines with interest rates and equals to

                                       (𝑙 # + 𝑙 $ )𝑟"
                             𝐷%&' =                   = γ(𝑙 # + 𝑙 $ ) = γ(1 − 𝑐).                                  (13)
                                          (𝑟" /γ)

Note that this calculation recognizes that, by assumption, the insured depositors are sleepy. The bank is
solvent and has the same positive equity value equal to c:

12
  See Dreschler et al. (2017) and Egan et al. (2017) who argue that the deposit franchise may allow banks to pay
deposit rates that are low and Dreschler et al. (2021) who argue that in addition, this insensitivity in the deposit rates
may hedge some of the banks’ interest rate risk exposure.

                                                            8



                        Electronic copy available at: https://ssrn.com/abstract=4387676
                      𝐸 %&' = 𝐴%&' − 𝐷%&' = 𝑐 + γ(1 − 𝑐) − γ(1 − 𝑐) = 𝑐.                                   (14)
Intuitively, if the bank’s debt stays in place at the legacy rate (and all insured and uninsured depositors are
sleepy), the market value of debt declines at the same rate as value of the assets. Thus, the decline of the
value of liabilities perfectly hedges the decline in assets given in (6). Consequently, the market value of
equity remains the same as its pre-interest rate increase value.
Instability due to Uninsured Depositors Runs: While s=0 is always one of the equilibria, as interest rate
increases, the range of sustainable beliefs about s in a good equilibrium converges to S ∈ [0] since 𝑠 ∗
converges to zero. In other words, for sufficiently high increase in interest rates, the bank cannot survive a
small withdrawal by uninsured depositors without causing a run. Thus, we can think about (1-𝑠 ∗ ) as a
measure of bank instability to uninsured depositor run. This index of bank instability will be higher for
banks with lower initial capitalization and higher uninsured leverage.
We note that in the above framework we assumed that insured depositors are sticky. In practice, some of
them may also consider withdrawing their money following an interest rate increase (see Dreschler et al.
2017). It is easy to incorporate such deposit outflows in our framework and they would further limit the
range of sustainable beliefs supporting a good “no-run” equilibrium.
3.3 Numerical Example
We conclude this section by illustrating the properties of our model in a simple numerical example.
Consider a bank with initial value of assets equal to $100BN. The bank’s long duration assets are risk free
perpetuities (T-bonds with infinite maturity), paying an annual coupon of 3% before monetary tightening,
and short duration asset is cash paying 0. Specifically, the bank holds $10BN in cash and $90BN in
treasuries so that c = 0.1. The bank has $90BN of deposits at the deposit cost of 3% so that (𝑙 # + 𝑙 $ ) = 0.9.
The current risk-free rate is 3%. In other words, for simplicity, the market and face value of bank liabilities
are the same. Then, the market value of equity is c share of its initial value of assets and equals $10BN.
Suppose the FED unexpectedly increases the risk-free rate by 100 basis points to 4% due to inflation
(i. e. , γ = 0.75). According to (5) the value of the bank’s long-term assets is equal to 0.75 of their initial
value and the overall mark-to-market value of bank assets equals to $10BN+0.75×$90BN = $77.5BN. Note
that in this case the bank would not be able to survive a full withdrawal of its deposits as the market value
of its asses is less than the face value of its debt equal to $90BN and so the solvency condition (6) is violated.
Indeed, we have that 𝑐 − (1 − 𝑐)(1 − γ) < 0 as 0.1-0.9×0.25 = -0.125.
As we discussed above if the insured depositors are sticky, the bank’s solvency will crucially depend on
the behavior of uninsured depositors. Suppose that the uninsured leverage equals to 𝑙 $ =0.8. We can now
compute the highest belief about the share of uninsured depositors withdrawing that is sustainable in
                                                                                                   +
equilibrium (without causing a run and bank insolvency). According to (12) we have that 𝑠 ∗ = (-./)1! =
  2.-
2.45×2.7
           = 0.5. Hence any belief that up to a half uninsured depositors withdraw their money can be
sustained in equilibrium in this example without causing a bank run and insolvency. The belief that more
than half of uninsured depositors withdraw will “lead” to a bank run with all uninsured depositors
attempting to withdraw their money.
4. Marked to Market Losses, Solvency, and Run Risk
Motivated by our analysis above, we next more systematically consider whether marking banks’ asset to
market renders a share of U.S. banks insolvent, or exposes them to run risk. There are several challenges
that arise when assessing whether banks in reality are insolvent and run prone, even after marking assets to
market. First, it is difficult to evaluate the market value of deposit liabilities. On the one hand deposits are

                                                        9



                       Electronic copy available at: https://ssrn.com/abstract=4387676
on demand, and thus could be evaluated at their face value at prevailing market rates. On the other hand,
there may be a spread between deposit rates to fed funds rates due to banks’ market power, allowing banks
to earn rents (Egan et al. 2017, Dreschler et al. 2021). Under this scenario one may want to consider on
demand liabilities more akin to long duration assets, which also lose value when rates rise (Dreschler et al.
2021). Second, it is unclear how run prone uninsured deposits are. Egan et al. (2017) estimate that uninsured
deposits are somewhat elastic to default, but this elasticity can result in multiple equilibria. Such complex
counterfactuals are beyond the empirical assessments in this paper. Instead, we follow our framework in
Section 3.2 and consider several alternative scenarios with a range of uninsured depositors’ withdrawal
behavior. We also go beyond our simple framework to consider the role of regulators, which play a central
role in bank failures (Granja, et al. 2017).
4.1 Are Assets of U.S. Banks Sufficient to Cover Uninsured Deposits?
The first benchmarking exercise considers the run incentives of uninsured depositors from the perspective
of assets after marking assets to market. Specifically, we consider whether the assets in the U.S. banking
system are large enough to cover all uninsured deposits. Intuitively, this situation would arise if all
uninsured deposits were to run, and the FDIC did not close the bank prior to the run ending.
Figure 3A plots the histogram of uninsured deposit to asset ratio and marked-to-market asset ratio. Figure
3B plots uninsured deposit to asset ratio against bank size. As we observe, while the decline in asset values
increased the ratio of uninsured deposits to assets, virtually all banks (barring two) have enough assets to
cover their uninsured deposit obligations. In other words, if the FDIC does not step in to protect the deposit
insurance fund, or if the liquidation of the assets does not cause large enough fire sales, there may be no
reason for uninsured depositors to run.13
Notably, SVB, is one of the worst banks in this regard. Its marked-to-market assets are barely enough to
cover its uninsured deposits. Even a small fire sale discount would result in uninsured depositors in losing
money in a run, making a run rational. This fact can help explain why the uninsured depositors run may
have occurred for this bank.
4.2 Uninsured Deposits and Scenarios on Running
We next assess the bank solvency across various beliefs regarding the share of uninsured depositors
withdrawing (i.e., s in the model) using bank balance sheet data and their marked-to-market asset declines.
Like in the SVB case, the FDIC steps in to protect insured depositors when a bank is put into receivership
(Granja, et al. 2017). Thus, we consider a simple empirical solvency condition that reflects the idea that
insured depositors being impaired is the lower bar for the FDIC intervention. Specifically, instead of
considering whether the marked-to-market value of bank assets after such withdrawal is enough to cover
the marked-to-market value of bank liabilities (i.e., solvency condition (10) from Section 3.2), we study
whether insured depositors would be impaired under these scenarios. For that purpose, Figure 4 plots the
distribution of insured deposit coverage ratio. We defined it as:
                                        Mark-to-Market Assets – s × Uninsured Deposits – Insured Deposits
     Insured Deposit Coverage ratio =
                                                                Insured Deposits
A negative value of insured deposit coverage ratio means that the remaining mark-to-market asset value – i.e.,
after paying uninsured depositors who withdraw their deposits -- is not sufficient to repay all insured deposits.
We simulate two cases. In case 1 (Figure 4a and 4b), we assume all uninsured depositors run (i.e., s=1). In



13
  We note that the uninsured depositors could start running due to risk of further asset losses even if currently banks
have enough assets to cover their uninsured deposit obligations.

                                                          10



                       Electronic copy available at: https://ssrn.com/abstract=4387676
case 2 (Figure 4c and 4d), we assume half of all uninsured depositors run (i.e., s=0.5). We compare these
cases pre and post FED monetary tightening.
Prior to FED interest rate increases, U.S. banks were solvent under both scenarios, and uninsured depositors
had no incentives to run. In other words, even if all uninsured deposits would have been withdrawn, the
remaining assets would have been sufficient to cover insured deposits. Of course, this assumes that deposit
withdrawals do not result in fire sales, which would further depress assets. But absent fire sales, the U.S.
banks would have been able to withstand all deposit withdrawals.
As we discuss above, the recent FED tightening has resulted in substantial losses in the value of banks’
long duration assets. Our calculations imply that banks are much more fragile to uninsured depositors runs
after the tightening. Suppose that all uninsured depositors were to withdraw funds from U.S. banks. Table
2 shows that 1,619 U.S. banks would have negative insured deposit coverage, suggesting insured deposits
would be impaired. While the median bank is small, with assets of $0.3BN, the aggregate losses would be
large, and would involve $2.6T of aggregate deposits, and a shortfall for the deposit insurance fund of
$300BN. This would provide the FDIC with enormous incentives to intervene during a run, such as in the
case of SVB, and thus in fact provide incentives for uninsured depositors to run.
The case under which all uninsured depositors run is likely too extreme, although not impossible once the
news of a run spreads as illustrated in our stylized framework in Section 3.2. Therefore, in case 2 we
consider whether banks can withstand half of their uninsured depositors withdrawing funds. Again, this
scenario assumes that banks can liquidate their assets at market prices, rather than facing a fire sale discount.
Even under this scenario, we find that there are 186 banks with assets of about $300 billion that have a
negative insured deposit coverage ratio (Table 2). In other words, for these banks comprising about $250
billion of insured deposits, even insured deposits would be impaired absent regulatory intervention (e.g.,
by the FDIC). The losses to the deposit insurance fund would total approximately $10 billion. If the FDIC
shut these banks following a run, there would be no funds left for the remaining uninsured depositors. In
other words, the decision to run would have been a rational one. So, our calculations suggest these banks
are certainly at a potential risk of a run, absent other government intervention or recapitalization.
Interestingly, while SVB is very close to the boundary of a negative insured deposit coverage ratio, our
calculations suggest it should have been able to survive a run without impairing insured depositors.
However, even a 0.4% fire sale discount would have resulted in impaired insured deposits if all uninsured
depositors ran.
To further assess the vulnerability of the US banking system to uninsured depositors run, we plot the 10
largest banks at the risk of a run, which we define as a negative insured deposit coverage ratio if all
uninsured depositors run (see Figure 5). Figure A2 in the Appendix shows the same plot for the universe of
all banks that become insolvent if all uninsured depositors run. Because of the caveats in our analysis as
well as the potential of exacerbating their situation, we anonymize their names, but we also plot SVB as
comparison. We plot their mark-to-market asset losses (Y axis) against their uninsured deposits as a share
of marked to market assets. Some of these banks have low uninsured deposits, but large losses, but the
majority of these banks have over 50% of their assets funding with uninsured deposits. SVB stands out
towards the top right corner, with both large losses, as well as large uninsured deposits funding. As Figure
5 shows, the risk of run does not only apply to smaller banks. Out of the 10 largest insolvent banks, 1 has
assets above $1 Trillion, 3 have assets between $200 Billion and $1 Trillion, 3 have assets between $100
Billion and $200 Billion and the remaining 3 have assets between $50 Billion and $100 Billion.
We conclude by plotting the sensitivity of the US banking system to the uninsured depositor runs for a
broader range of “run” cases. This exercise assesses the solvency of US banks for a range of beliefs about
the share of uninsured depositors that are expected to withdraw their funds, as we did in Section 3.2, given
our empirical solvency condition. Figure 6 presents the number of insolvent banks (Figure 6A) and their

                                                       11



                      Electronic copy available at: https://ssrn.com/abstract=4387676
aggregate assets (Figure 6B) associated with a given uninsured deposits withdrawal case. We consider ten
cases ranging from 10% to 100% of uninsured deposits being withdrawn at each bank. The bank is
considered insolvent if its mark-to-market value of assets – after paying a given share of the uninsured
depositors –is insufficient to repay all insured deposits. Figure 6 shows that even if only 10% of uninsured
depositors decided to withdraw their money, we would have 66 banks failing with about $210 billion of
assets. If 30% of uninsured depositors ran instead, which is close to the share of withdrawals just preceding
the shutdown of the SVB, we would have 106 banks failing accounting for $250 billion of assets.
4.3 Extreme Insolvency: No Deposit Franchise
Finally, we also consider an extreme case under which we compute the solvency of banks by assessing
whether the marked to market value of assets is sufficient to cover all non-equity liabilities. This is
equivalent to empirically assessing the solvency condition (6) from Section 3.2 for the universe of US
banks. In other words, if all depositors and debtholders withdrew their funding today, could banks repay
their debts. As noted in Section 3.2, this is akin to assuming that there is no value to banks’ deposit franchise.
We assume that when assets are liquidated, there is no additional discount due to liquidation, so assets can
be sold at their current market value. This scenario is extreme, because insured depositors have no
incentives to withdraw funds as a function of default risk. On the other hand, it is a useful benchmark to
better understand the de facto capitalization of the U.S. banking sector. Implicitly, this calculation assumes
that increasing interest rates do not decrease the value of bank liabilities, i.e., the fed funds rate
instantaneously pass-through to deposit rates.
We present these results in Appendix A that plots the histograms (density) of the equity to asset ratio as of
2022:Q1 and the mark-to-market equity to asset ratio as of 2023:Q1 (Panel A, Figure A3) and these values
by bank size (Panel B, Figure A3). The reference lines in Panel A indicates Silicon Valley Bank’s equity
to asset ratio as of 2022:Q1 and its mark-to-market equity to asset ratio. As we observe, prior to the recent
asset declines all US banks had positive bank capitalization. However, after the recent decrease in value of
bank assets, 2,315 banks accounting for $11 trillion of aggregate assets have negative capitalization relative
to the face value of all their non-equity liabilities (see Column 1 of Table 2). We further find that regions
with lower household incomes and large share of minorities are much more exposed to the bank risk (see
Section 5.3).
5. Extensions: Hedging, Credit Risk and Regional Variation
We consider several extensions of our analysis in Section 4. First, we discuss whether banks may have
hedged some of the declines of their assets due to raise in interest rates. Second, we consider the extent to
which banks can withstand adverse credit events, focusing on the case of commercial real estate. Finally,
we consider where the risk in banking sector resides spatially in the US.
5.1 Limited Hedging by U.S. Banks During the 2022 Monetary Tightening
Up to this point, we have not formally considered the possibility that banks may have hedged their interest
rate exposure. However, this does not imply that the aggregate $2.2 trillion losses in the banking system
are any less relevant for financial stability. Suppose that most banks had hedges covering their interest risk
exposure. In that case, an important question arises as to who provided these hedges as a counterparty. If
the hedges were provided by other banks, this would not alter the aggregate losses but merely reallocate
them across banks. Given that all banks were thinly capitalized prior to the rate increase, with an average
Equity to Asset ratio of about 10%, the overall impact and the big picture remain largely unchanged.14
Alternatively, if the counterparty entities were non-bank institutions that insured the US banking system’s


14
     As shown in Table A1, the aggregate equity in the banking system was about $2.3 trillion in 2022:Q1.

                                                          12



                         Electronic copy available at: https://ssrn.com/abstract=4387676
aggregate interest rate risk, we would likely witness severe stress in such institutions at this point, as seen
with AIG’s systemic risk exposure in 2007.
Nevertheless, to address this issue formally, in a companion note (Jiang et al. 2023a) we analyze the extent
to which U.S. banks hedged their asset exposure as the monetary policy tightened in 2022. We use call
reports data for interest rate swaps covering close to 95% of all bank assets and supplement it with hand-
collected data on broader hedging activity from 10K and 10Q filings for all publicly traded banks (68% of
all bank assets).
We find that interest rate swap use is concentrated among larger banks who hedge a small amount of their
assets. Overall, only 6% of aggregate assets in the U.S. banking system are hedged by interest rate swaps.
This analysis implies that the use of hedging and other interest rate derivatives was not large enough to
offset a vast majority of the $2.2 trillion loss in the value of U.S. banks’ assets. Moreover, we also find
that banks with the most fragile funding like the SVB – i.e., those with highest uninsured leverage – if
anything sold or reduced their hedges during the monetary tightening.15 This allowed them to record
accounting profits but exposed them to further rate increases. These actions are reminiscent of asset
substitution: if interest rates had decreased, equity would have reaped the profits, but if rates increased, then
debtors and the FDIC would absorb most of the bank losses.
5.2 Impact of Potential Credit Losses on the Fragility of the US Banking System
We abstracted away from a potential impact of credit losses on bank stability. In a companion note (Jiang
et al. 2023b) we analyze the extent to which the losses established in Section 4 eroded banks’ ability to
withstand adverse credit events. We focus on potential distress on bank’s commercial real estate (CRE)
loan portfolios.
We focus on commercial real estate for a couple of reasons. First, the commercial real estate loans constitute
a substantial share of assets for a typical bank accounting for about quarter of assets for an average bank
and $2.7 trillion of bank assets in the aggregate.16 Second, commercial real estate is also seen as a potential
source of adverse credit events in the near term, especially the office sector (e.g., see Gupta et al. 2022).
We find that 10% (20%) default rate on CRE loans – a range close to what one saw in the Great Recession
on the lower end – would result in about $80 billion ($160 billion) of additional bank losses. While these
losses are an order of magnitude smaller than the decline in bank asset values associated with a recent rise
of interest rates, they can have important implications. An additional 285 (578) banks with aggregate assets
of $700 billion ($1.2 trillion) would have their marked-to-market value of assets insufficient to cover the
face value of all their non-equity liabilities. Even if half of uninsured depositors decide to withdraw, the
losses due to CRE distress would result in additional 21 (58) smaller regional banks at a potential risk of
impairment to insured depositors (over what we discussed in Section 4). Thus, the unrealized losses due to
monetary tightening have made banks less resilient to adverse credit events, further contributing to the
fragility of the banking system.
5.3. Regional Exposure to Bank Risk
We conclude our analysis by assessing where the risk in the banking sector – established in Section 4 –
resides spatially in the US. We proceed in three steps. We first find banks’ deposit impairment ratio by
assuming that equity and non-deposit debt are in the first position to absorb mark-to-market losses in the
extreme insolvency case discussed above:

15
  SVB hedged about 12% of all securities at the end of 2021. By the end of 2022, they hedged only 0.4%.
16
  We consider all non-residential real estate loans as commercial loans. See Appendix A1 for more detail on banks
assets and liabilities.

                                                       13



                      Electronic copy available at: https://ssrn.com/abstract=4387676
                                                               9((&!" .:;<=-!?-:;<=&! @?(("
                         𝐷𝑒𝑝𝑜𝑠𝑖𝑡 𝐼𝑚𝑝𝑎𝑖𝑟𝑚𝑒𝑛𝑡 𝑅𝑎𝑡𝑖𝑜8 =                                          .
                                                                       A?!;1 B&C?(#!"

We then obtain information about bank branch networks and the regional distribution of deposit taking
from the FDIC Summary of Deposit (SOD) in 2022. We assign bank risk to regions where they have
branches. Lastly, we find a county’s exposure to bank risk by calculating the percentage of its total deposits
at the risk of impairment:
                                                   ∑"∈# EFG {B&C?(#! IJC;#<&J&%! K;!#?" ,2}×B&C?(#!"#
               𝑆ℎ𝑎𝑟𝑒 𝑜𝑓 𝐷𝑒𝑝𝑜𝑠𝑖𝑡 𝑎𝑡 𝑅𝑖𝑠𝑘+ =                            ∑"∈# B&C?(#!"#
                                                                                                        .

Figure 7 presents the map of local exposure to bank risk. Figure 7A plots the share of deposits at risk. The
most exposed counties have up to 13% deposits at the risk of impairment. These counties are clustered in
several states, such as New Hampshire, Massachusetts, Wyoming, and New York. Some counties do not
have much exposure to the risk, such as Delaware, Nebraska, Arkansas, and Maryland. Figure 7B plots the
dollar amount of deposits at risk. The most exposed counties in terms of share of deposit at risk do not
necessarily have the largest dollar amount of deposits at risk. As we will discuss below, this is because the
most exposed regions are more likely to have lower median income and thus lower total deposit amount.
Figure 8 plots the county-level share of impaired deposits against local demographics. Counties with more
minority population, especially those with more than 80% Black and Hispanic population, tend to be more
exposed to the bank risk (Figure 8A). For instance, on average, counties with more than 90% Black and
Hispanic population have about 4% of total deposits at the risk of impairment. Counties with low median-
income are more likely to be exposed to bank risk (Figure 8B). Regions with median annual income below
$35,000 are mostly exposed to the risk, with about 4% of deposit at the risk of impairment. Lastly, counties
with a larger population without a college degree are more exposed to the risk (Figure 8C). In particular,
regions with nearly the entire population with a college degree have no exposure to the risk, while regions
with more than 90% population without a college degree have about 2% of deposits at risk of impairment.
Thus, the risk in the banking sector due to monetary tightening is not spread uniformly across space, with
higher exposure in regions with more minorities and lower income households.
6. Conclusion
We provide a simple analysis of U.S. banks’ asset exposure to a recent rise in the interest rates with
implications for financial stability. The U.S. banking system’s market value of assets is $2.2 trillion lower
than suggested by their book value of assets. We show that these losses, combined with a large share of
uninsured deposits at some U.S. banks can impair their stability. Even if only half of uninsured depositors
decide to withdraw, almost 190 banks are at a potential risk of impairment to even insured depositors, with
potentially more than $250 billion of insured deposits at risk absent regulatory intervention. If uninsured
deposit withdrawals cause even small fire sales, substantially more banks are at risk. Overall, these
calculations suggest that recent declines in bank asset values significantly increased the fragility of the US
banking system to uninsured depositors runs (summarized in Table 2 and Figure 6).
There are several medium-run regulatory responses one can consider to an uninsured deposit crisis. One is
to expand even more complex banking regulation on how banks account for mark to market losses.
However, such rules and regulation, implemented by myriad of regulators with overlapping jurisdictions
might not address the core issue at hand consistently (Agarwal et al. 2014).17 Alternatively, banks could

17
   In addition, such regulations might have implications for non-bank institutions (shadow banks) that provide several
services like banks and have gained market share that reflects in part the regulatory actions on banks (see Buchak et
al. 2022). These institutions are predominantly financed with short-term uninsured debt, but they are also significantly
better capitalized than banks on average (Jiang et al. 2020). See also Greenwood et al. (2017), Corbae and D’Erasmo
(2021), and Begenau and Landgvoit (2022) for recent studies of impact of regulatory policies on banks.

                                                          14



                       Electronic copy available at: https://ssrn.com/abstract=4387676
face stricter capital requirement, which would bring their capital ratios closer to less regulated lenders, as
documented in Jiang et al. (2020). Discussions of this nature remind us of the heated debate that occurred
after the 2007 financial crisis, which many might argue did not result in sufficient progress on bank capital
requirements (see Admati et al. 2013, 2014 and 2018). They also resonate well with historical studies on
the impact of deposit insurance on banks’ risk-taking behavior (see Calomiris and Jaremski 2019).




                                                References:
Admati, A, P. DeMarzo, M. Hellwig, and P. Pfleiderer, 2013, “Fallacies, Irrelevant Facts, and Myths in the
Discussion of Capital Regulation: Why Bank Equity Is Not Socially Expensive,” Working Paper.
Admati, A. and M. Hellwig, 2014, “Bankers New Clothes: What’s wrong with Banking and what to do
about it?”, Princeton University Press.
Admati, A, P. DeMarzo, M. Hellwig, and P. Pfleiderer, 2018, “The Leverage Rachet Effect,” Journal of
Finance 73, 145-198.
Agarwal, S., Lucca, D., Seru, A., and Trebbi, F., 2014, “Inconsistent Regulators: Evidence from Banking,”
Quarterly Journal of Economics 129, 889-938.
Atkeson, A. G. A. d’Avernas, A. L. Eisfeldt, and P.-O. Weill, 2018, “Government Guarantees and the
Valuation of American Banks,” NBER Macroeconomics Annual.
Begenau, J., M. Piazessi, and M. Schneider, 2015, “Banks’ Risk Exposures,” working paper.
Begenau, J., and E. Stafford, 2019, “Do Banks Have an Edge,” working paper.
Begenau, J, and T. Landgvoit, 2022, “Financial Regulation in a Quantitative Model of the Modern Banking
System,” Review of Economic Studies 89, 1748–1784.
Buchak, G., G. Matvos. T. Piskorski, and A. Seru, 2022, “Beyond the Balance Sheet Model of Banking:
Implications for Bank Regulation and Monetary Policy,” forthcoming in the Journal of Political Economy.
Calomiris, C.W., and M. Jaremski, 2019. Stealing Deposits: Deposit Insurance, Risk‐Taking, and the
Removal of Market Discipline in Early 20th‐Century Banks, Journal of Finance 74, 711-754.
Chen, Q., I. Goldstein, Z. Huang, R. Vashishtha, 2022, “Liquidity Transformation and the Fragility in the
US Banking System,” working paper.
Corbae, D., and P. D’Erasmo, 2021, “Capital Buffers in a Quantitative Model of Banking Industry
Dynamics,” Econometrica 89, 2975–3023.
Diamond, D.W. and Dybvig, P.H., 1983, “Bank Runs, Deposit Insurance, and Liquidity,” Journal of
Political Economy, 91, 401-419.
Drechsler, I., A. Savov, and P. Schnabl, 2017, “The Deposits Channel of Monetary Policy,” Quarterly
Journal of Economics 132, 1819-1876.
Drechsler, I., A. Savov, and P. Schnabl, 2021, “Banking on Deposits: Maturity Transformation without
Interest Rate Risk,” Journal of Finance 76, 1091-1143.




                                                     15



                     Electronic copy available at: https://ssrn.com/abstract=4387676
Egan, M., Matvos, G., Hortacsu, A., 2017, “Deposit Competition and Financial Fragility: Evidence from
the US Banking Sector,” American Economic Review 107, 169-216
Granja, J., G. Matvos, and A. Seru. 2017, “Selling Failed Banks,” Journal of Finance, 72(4), 1723-1784.
Gupta, A., V. Mittal, and S. Van Nieuwerburgh, 2022, “Work from Home and the Office Real Estate
Apocalypse,” NBER working paper.
Greenwood, R., J. C. Stein, S. G. Hanson, and A. Sunderam, 2017, “Strengthening and Streamlining Bank
Capital Regulation,” Brookings Papers on Economic Activity, 479–565.
Jiang, E., G. Matvos, T. Piskorski, and A. Seru, 2020, “Banking without Deposits: Evidence from Shadow
Bank Call Reports,” NBER working paper.
Jiang, E., G. Matvos, T. Piskorski, and A. Seru, 2023a, “Limited Hedging and Gambling for Resurrection
by U.S. Banks During the 2022 Monetary Tightening?,” working paper.
Jiang, E., G. Matvos, T. Piskorski, and A. Seru, 2023b, “U.S. Bank Fragility to Credit Risk in 2023:
Monetary Tightening and Commercial Real Estate Distress,” working paper.
Kelly, B., H. Lustig, and S. Van Nieuwerburgh, 2016, “Too-Systemic-to-Fail: What Option Markets Imply
about Sector-Wide Government Guarantees,” American Economic Review, 106, 1278-1319.
Xiao, Kairong, 2020, “Monetary Transmission through Shadow Banks,” The Review of Financial Studies
33, 2379-2420.




                                                   16



                    Electronic copy available at: https://ssrn.com/abstract=4387676
                             Table 1: Mark-to-Market Statistics by Bank Size
This table presents the descriptive statistics of our key metrics after marking-to-market the asset values for each
FDIC-insured depository institutions in the U.S. Column (1) shows these statistics of all the banks, Column (2)
for small banks, Column (3) for large and non-systemically important banks (non GISB), and Column (4) for
systemically important banks (GSIB banks). Bank size is based on the reported bank asset value as of 2022:Q1.
Small banks have assets less than $1.384 Billion, the Community Reinvestment Act asset size thresholds for
large banks. Large (non GISB) banks have asset greater than equal to 1.384 Billion. GSIB banks are classified
according to bank regulators’ definition as of 2022:Q1. We also assign GSIB status to US chartered banks
affiliated with holding companies that are classified as GSIB. The first row shows the aggregate loss which is
defined as the sum of the dollar loss at each bank based on marking-to-market their 2022:Q1 balance sheets.
Other rows in the table report bank level statistics. Bank level statistics are based on the sample median values.
Numbers in parentheses are the standard deviations. Loss for each bank is computed based on marking-to-market
all its securities and loans (see text) according to the market price growth from 2022:Q1 to 2023:Q1. We also
decompose these dollar losses into those from RMBS, Treasury and other securities, loans secured by residential
1 to 4 family properties (residential mortgage), and other loans. We then report them in terms of the percentage
of total losses. Loss/Asset at the bank level is the loss as a percentage of the book value of assets as of 2022:Q1.
Uninsured Deposit/MM Asset is the uninsured deposit amount of 2022:Q1 divided by the mark-to-market asset
value (MM Asset) as of 2023:Q1. Insured Deposit Coverage ratio is defined as (mark-to-market asset value -
uninsured deposit -insured deposit)/insured deposit. Note that our analyses are done at bank charter level instead
of bank holding company level. Sources: Bank Call Reports in 2022:Q1 and various ETF and indices price data
as described in the main text.

                                              (1)            (2)                (3)                  (4)
                                              All          Small         Large (non GSIB)           GSIB
                                            Banks       (0, 1.384B)         [1.384B, )
 Aggregate Loss                              2.2T          144B                1.3T                0.73T
 Bank Level Loss                            28.6M         22.3M               308.0M              837.0M
                                            (6.7B)       (38.2M)               (8.9B)             (69.7B)
    Share RMBS                               13.2          11.4                 22.6                17.4
                                            (19.2)        (18.5)               (20.6)              (32.8)
    Share Treasury and Other                 15.5          17.0                 10.4                 8.1
                                            (35.1)        (37.5)               (14.8)              (33.0)
    Share Residential Mortgage               19.9          19.8                 20.4                20.5
                                            (33.4)        (35.4)               (19.5)              (35.9)
    Share Other Loan                         32.8          32.7                 33.8                 1.0
                                            (32.7)        (34.3)               (21.6)              (38.9)
 Loss/Asset                                   9.2           9.1                 10.0                 4.6
                                             (4.7)         (4.8)                (4.4)               (6.1)
 Uninsured Deposit/MM Asset                  24.2          22.7                 35.7                19.0
                                            (14.1)        (12.6)               (15.8)              (26.6)
 Insured Deposit Coverage Ratio               4.2           3.9                  5.9                15.4
                                            (32.7)        (30.4)               (36.4)             (115.7)
 Number of Banks                             4844          4072                  743                 29




                                                        17



                       Electronic copy available at: https://ssrn.com/abstract=4387676
                             Table 2: Insolvent Banks Under Different Cases
The top panel of the table shows aggregate statistics of insolvent banks as of 2022:Q1. The bottom panel of the
table presents the statistics using median values of all the banks in each category as defined below as of 2022:Q1.
Numbers in parentheses in the bottom panel are standard deviations. Insolvency is defined based on mark-to-
market asset values under four different cases as of 2023:Q1. In column (1), we assume all assets are liquidated
at their mark-to-market value. The bank is considered insolvent if the mark-to-market value of assets is
insufficient to cover all non-equity liabilities. In column (2) we assume all uninsured depositors run. The bank
under this case is considered insolvent if the mark-to-market value of assets – after paying all uninsured
depositors -- is insufficient to repay all insured deposits. In column (3) we assume half of the uninsured
depositors run. The bank under this case is considered insolvent if the mark-to-market value of assets – after
paying half of the uninsured depositors – is insufficient to repay all insured deposits. In column (4) we assume
all uninsured depositors run and there is a fire sale discount of 0.4%. The bank under this case is considered
insolvent if the mark-to-market value of assets net of fire sales – after paying all uninsured depositors -- is
insufficient to repay all insured deposits. The fire sale discount of 0.4% is obtained by considering the case of
Silicon Valley Bank (SVB). At this value of fire sale discount, the mark-to-market value of assets net of fire
sales – after paying all uninsured depositors -- is just sufficient to repay all insured deposits. Note that SVB is
not classified as insolvent in column (2). Aggregate asset shows the sum of total assets of banks in each category
as of 2022:Q1. Aggregate equity shows the sum of equity of banks in each category as of 2022:Q1. Aggregate
insured deposit is the sum of total insured deposits of banks in each category as of 2022:Q1. Total shortfall is
the sum of total uncovered insured deposits as of 2022:Q1. Systemically important banks (GSIB banks) are
classified according to bank regulators’ definition as of 2022:Q1. We also assign GSIB status to US chartered
banks affiliated with holding companies that are classified as GSIB. Data Sources: Bank Call Reports in
2022:Q1 and ETF and indices price data.
                                         (1)               (2)                  (3)                    (4)
                                     All Assets          100%              50% Uninsured              0.4%
                                     Liquidate         Uninsured           Depositor Run            Fire Sale
                                                      Depositor Run                                 Discount
 Aggregate Asset                        11T               4.9T                  0.3T                  5.3T
 Aggregate Equity                       1.0T              0.4T                  0.02T                 0.4T
 Aggregate Insured Deposit              5.2T              2.6T                  0.25T                 2.7T
   GSIB Banks                           2.2T              1.1T                   20B                  1.1T
 Total Shortfall                        1.5T              0.3T                  0.01T                 0.3T
   GSIB Banks                           0.6T             0.11T                  0.8B                  0.1T
 Total Asset                            0.4B              0.3B                  0.2B                  0.3B
                                       (68B)             (46B)                   (9B)                (45B)
 Liability/Asset                        91.7              91.9                   92.0                 91.9
                                        (2.3)             (2.3)                 (3.0)                 (2.3)
 Domestic Deposit/Asset                 89.6              90.7                   90.8                 90.7
                                        (4.9)             (3.1)                 (3.7)                 (3.0)
 Insured Deposit/Asset                  66.4              67.8                   79.7                 67.6
                                       (11.6)            (11.4)                 (5.8)                (11.6)
 Uninsured Deposit/Asset                22.1              22.4                   10.2                 22.5
                                       (11.7)                (11.8)             (7.2)                (12.0)
 Equity/Asset                            8.3                   8.1               8.0                   8.1
                                        (2.3)                 (2.3)             (3.0)                 (2.3)
 Number of Banks                        2315                  1619               186                  1724

                                                        18



                      Electronic copy available at: https://ssrn.com/abstract=4387676
                                 Figure 1: Fed Tightening and Asset Prices
Panel (a) plots the time series of the fed funds rates (in %). Panel (b) plots the market price of the portfolio of
residential mortgage-backed securities (RMBS), the commercial mortgage-backed securities (CMBS), and the
US Treasuries relative to their values in 2022:Q1 (normalized to one). Panel (c) plots the corresponding market
prices of US Treasuries with different maturities, relative to their value in 2022:Q1. The maturity structure is
chosen to match the asset maturity breakdowns in the call reports. We plot the prices from 2022:Q1 till 2023:Q1.
Data Sources: Fed Funds Rate is from the Federal Reserve System data, RMBS market price is from the SPDR
Portfolio Mortgage-Backed Bond ETF (SPMB), CMBS market price is from the iShares CMBS ETF (CMBS),
and the US Treasury market price indexes are from the S&P U.S. Treasury Bond Index and the iShares Treasury
ETF.




              (a) Fed Funds Rate (in %)                                (b) RMBS, CMBS, Treasury




                                            (c) Treasury by Maturity




                                                        19



                       Electronic copy available at: https://ssrn.com/abstract=4387676
                Figure 2: Distribution of Change in Asset Value (“Marking to Market”)
This figure plots the histograms (density) of the percentage of bank’s asset value decline when assets are mark-
to-market according to market price growth from 2022:Q1 to 2023:Q1 (Panel a) and bank asset value decline by
bank size (Panel b). We describe the steps to calculate the mark-to-market asset values in the main text. The
reference line in Panel (a) indicates Silicon Valley Bank’s asset value decline. Silicon Valley Bank’s asset value
declines by 15.7%, or $34 billion, after their assets are marked to market. The reference line is at 89th percentile.
The 5th, 25th, median, 75th, and 95th percentiles in Panel (a) are 4%, 6%, 9%, 13%, and 19%, respectively. In
Panel (b), the x-axis is asset value in log terms. The size distribution of the U.S. banking industry has a fat left-
tail, meaning that there are many extremely small banks. The largest 50 banks’ asset sizes range from $58.9
billion to $3.5 trillion, while the bottom 10 percentiles have asset values less than $68 million. Log assets of 18,
20, 22, and 24 are about $66 million, $485 million, $3.6 billion, and $26 billion. The decline at the right-end
starts around log asset value of 24, which is about $26B. Data Sources: Bank Call reports in 2022:Q1 and
various ETF and indices price data as described in the main text.




                     (a) Histogram                                       (b) Asset Decline by Size




                                                         20



                       Electronic copy available at: https://ssrn.com/abstract=4387676
Figure 3: Distribution of Uninsured Deposit to Asset Ratio (With & Without “Marking to Market”)
This figure plots the histograms (density) of uninsured deposit to asset ratios calculated based on 2022:Q1
balance sheets and mark-to-market values using various ETFs and indices according to the method described in
the main text (Panel a) and uninsured deposit ratio against bank size (Panel b). The reference lines in Panel (a)
indicate Silicon Valley Bank’s (SBV) values. SVB’s uninsured deposit ratio is 78% based on its 2022Q1 balance
sheet, which is about $169 billion. Its uninsured deposit to mark-to-market asset ratio is 92%. Both reference
lines are at the 100th percentile. The 5th, 25th, median, 75th, and 95th percentiles of the mark-to-market distribution
in Panel (a) are 6%, 17%, 24%, 33%, and 52%, respectively. In Panel (b), the decline at the right-end starts
around log asset value of 24, which is about $26B. Data Sources: Bank call reports in 2022:Q1 and various
ETF and indices price data as described in the main text.




                     (a) Histogram                                  (b) Uninsured Deposit/Asset by Size




                                                          21



                       Electronic copy available at: https://ssrn.com/abstract=4387676
       Figure 4: Distribution of Insured Deposit Coverage Ratio under Different “Run” Cases
This figure plots the histograms (density) of insured deposit coverage ratio calculated based on 2022:Q1 balance sheets
and mark-to-market values as described in the main text (Panel a and c) and insured deposit coverage ratio against
bank size (Panel b and d). Insured deposit coverage ratio is defined as
                                                   !"#$-to-Market &''()' – '×,-.-'/#(0 1(23'.)' – 4-'/#(0 1(23'.)'
             Insured Deposit Coverage ratio =                             4-'/#(0 1(23'.)'
                                                                                                                     .

We simulate two cases. In the first case (panel a and b), we assume all uninsured depositors run and withdraw their
uninsured deposits from banks (i.e., s=1). In the second case (panel c and d), we assume half of uninsured depositors
withdraw their uninsured deposits from banks (i.e., s=0.5). We remove the outliers by truncating the sample at 98th
and 1st percentiles. The 5th, 25th, median, 75th, and 95th percentiles of the mark-to-market distribution in Panel (a) are
-12%, -2.5%, 4%, 11%, and 34%, respectively and in Panel (b) are 1.3%, 12.5%, 21%, 36%, and 59%, respectively.
A negative value of insured deposit coverage ratio means that the remaining mark-to-market asset value after paying
uninsured depositors who withdraw their deposits is not enough to repay all insured deposits. For example, -12%
means that 12% of total insured deposits will not be repaid without deposit insurance fund. Silicon Valley Bank (SVB)
has a positive insured deposit coverage ratio of 5.6%, though notably its liabilities have a very small proportion of
insured deposits. Because of this even a tiny additional asset fire sale discount (0.4%) will make the insured coverage
ratio of the SVB to fall below zero after the uninsured deposits have withdrawn. Data Sources: Bank Call reports and
various ETF and indices price data as described in the main text.




                       (a) Histogram                                     (b) Insured Deposit Coverage by Size




                       (c) Histogram                                     (d) Insured Deposit Coverage by Size




                                                           22



                        Electronic copy available at: https://ssrn.com/abstract=4387676
                   Figure 5: Largest Insolvent Banks if All Uninsured Depositors Run
This figure plots the 10 largest “insolvent” banks. A bank is considered insolvent if the mark-to-market value of
its assets – after paying all uninsured depositors -- is insufficient to repay all insured deposits. On the y-axis we
plot mark-to-market losses as a percentage of initial bank asset value. On the x-axis we plot uninsured deposits
as a percentage of mark-to-market bank’s asset value. Out of the 10 largest insolvent banks, 1 has assets above
$1 Trillion, 3 have assets above $200 Billion (but less than $1 Trillion), 3 have assets above $100 Billion (but
less than $200 Billion) and the remaining 3 have assets greater than $50 Billion (but less than $100 Billion). We
also show Silicon Valley Bank (assets of $218 Billion in the plot). The assets are based on bank call reports as
of 2022:Q1. Banks in the top right corner, where Silicon Valley Bank is, have the most severe asset losses and
the largest runnable uninsured deposits to mark-to-market assets. The bubble size indicates the size of bank asset
in 2022:Q1. Data Sources: Bank Call reports and various ETF and indices price data as described in the main
text.




                                                         23



                       Electronic copy available at: https://ssrn.com/abstract=4387676
              Figure 6: Insolvent Banks under Different Uninsured Deposits Runs Cases
This figure presents the number of insolvent banks (panel a) and their aggregate assets (panel b) associated with
a given uninsured deposits withdrawal case. We consider ten cases ranging from 10% to 100% of uninsured
deposits being withdrawn at each bank. The bank is considered insolvent if its mark-to-market value of assets –
after paying a given share of the uninsured depositors -- is insufficient to repay all insured deposits. Sources:
Bank Call reports and various ETF and indices price data as described in the main text.

    1800

    1600

    1400

    1200

    1000

     800

     600

     400

     200

       0
             10%       20%       30%      40%       50%       60%       70%       80%      90%      100%
                                        % of Uninsured Deposits Withdrawing


                                         (a) Number of Insolvent Banks

    $5.0

    $4.5

    $4.0

    $3.5

    $3.0

    $2.5

    $2.0

    $1.5

    $1.0

    $0.5

    $0.0
             10%      20%       30%       40%       50%       60%       70%       80%     90%       100%
                                        % of Uninsured Deposits Withdrawing


                               (b) Aggregate Assets of Insolvent Banks (in $ Trillions)


                                                       24



                      Electronic copy available at: https://ssrn.com/abstract=4387676
                                Figure 7: Regional Exposure to Bank Risk
This figure plots the regional exposure to bank risk, measured by the aggregate deposits in 2022 that are at the
risk of impairment in each county. To find the deposit at the risk of impairment, we obtain bank branch network
information from the FDIC Summary of Deposit in 2022 and assign banks’ deposit impairment ratio, defined in
the main text, to each county where it has branches. The detailed steps are introduced in the main text. Panel (a)
plots the share of deposits at risk of impairment. Panel (b) plots total dollar amount of deposits at risk of
impairment. In both panels, counties are divided into four groups based on their at-risk deposits. The darkest
blue indicates the top quartile in terms of at-risk deposits. Data sources: bank call reports and the FDIC Summary
of Deposits.




                                                      (a) Share




                                               (b) Dollar Amount




                                                       25



                      Electronic copy available at: https://ssrn.com/abstract=4387676
               Figure 8: Local Bank Exposure Risk Exposure and Local Demographics
This figure plots the county-level share of impaired deposits against local demographics. In all panels, the y-axis
is the share of deposits at the risk of impairment. We divide all counties into various numbers of bins based on
its Black and Hispanic population share in Panel (a), median income in Panel (b), and the share of county
population that received a college degree in Panel (c). We then plot the average y-value in each bin against the
x-value. In Panel (a), each bin covers an incremental value of 2 percentage-points in the Black and Hispanic
population share. In other words, the difference between the largest and the smallest Black and Hispanic
population share in each bin is 2%. In Panel (b), each bin covers an incremental value of $20,000. In panel (c),
each bin covers an incremental value of 2 percentage points. The lines in each panel are the best fit lines based
on weighted least squares. The slope and statistical significance is reported in each panel (with ***, ** and *
implying significance at 1%, 5% and 10% levels respectively). Data sources: bank call reports, the FDIC
Summary of Deposit, American Community Survey.




                        (a) Race                                                (b) Income




                                                  (c) Education




                                                        26



                      Electronic copy available at: https://ssrn.com/abstract=4387676
                                                     APPENDIX
                                          Table A1: Bank Balance Sheets
This table reports the bank asset composition (Panel A) and liability and equity composition (Panel B) as of 2022:Q1.
In all panels, column (1) reports the aggregate statistics. Column (2) reports the average statistics at the bank level in
the full sample of banks. Column (3) reports the bank-level statistics in the subsample of small banks, where small
banks are defined as having the total asset size below $1.384 billion (the Community Reinvestment Act asset size
thresholds for large banks). Column (4) reports the statistics in the subsample of large, non-systematically important
banks, where large banks are defined as having the asset size above $1.384 billion. Column (5) reports the statistics
of the subsample of systemically important banks (GSIB banks). GSIB banks are classified according to bank
regulators’ definition as of 2022:Q1. We also assign GSIB status to US chartered banks affiliated with holding
companies that are classified as GSIB. All numbers in columns (2)-(5) are based on sample average, after winsorizing
at 5th and 95th percentiles. Numbers in parentheses are standard deviations. Data Sources: Bank Call Reports.
                                      Panel A: Bank Asset Composition – 2022Q1
                                            (1)          (2)            (3)                (4)               (5)
                                         Aggregate       Full          Small        Large (non GSIB)        GSIB
                                                       Sample       (0,1.384B)         [1.384B, )
     Total Asset $                         24T          5.0B           0.3B              19.7B             273.1B
                                                       (74.7B)        (0.3B)            (137.1B)          (618.3B)
     Number of Banks                       4844         4844           4072                743               29
     (Percentage of Asset)

     Cash                                  14.1         13.1           13.6                10.0             24.3
                                                        (9.8)         (10.0)               (7.9)           (12.4)
     Security                              25.2         23.9           24.4                21.5             18.1
                                                       (15.7)         (16.1)              (13.0)           (18.1)
       Treasury                             6.1          2.6            2.7                 2.1              4.7
                                                        (4.1)          (4.2)               (3.3)            (5.5)
       RMBS                                12.1          3.1            2.5                 6.6              5.5
                                                        (4.6)          (4.1)               (5.6)            (7.1)
       CMBS                                 2.3          0.9            0.7                 1.6              0.8
                                                        (1.6)          (1.5)               (1.9)            (1.5)
       ABS                                  2.7          0.8            0.7                 1.3              1.1
                                                        (1.6)          (1.5)               (1.8)            (2.0)
       Other Security                       2.1         14.9           16.2                 7.8              3.0
                                                       (12.7)         (13.0)               (8.3)            (7.8)
     Total Loan                            46.6         55.7           54.7                61.9             39.5
                                                       (15.6)         (15.6)              (13.9)           (16.3)
       Real Estate Loan                    21.9         41.9           41.4                45.2             19.4
                                                       (16.7)         (16.6)              (16.5)           (14.8)
        Residential Mortgage               10.6         15.5           15.9                13.9             10.3
                                                       (11.7)         (11.8)              (10.7)           (14.0)
        Commercial Mortgage                 2.2          2.1            1.8                 3.6              0.9
                                                        (2.5)          (2.4)               (2.9)            (1.8)
        Other Real Estate Loan              9.1         23.0           22.6                25.7              4.4
                                                       (11.9)         (11.8)              (11.9)            (4.9)
       Agricultural Loan                    0.3          2.6            2.9                 0.7              0.1
                                                        (4.1)          (4.4)               (1.8)            (0.4)
       Commercial & Industrial Loan         9            6.9            6.6                 9.1              4.2
                                                        (5.2)          (5.0)               (6.0)            (5.6)
       Consumer Loan                        7.7          2.2            2.2                 2.3              2.8
                                                        (2.5)          (2.3)               (3.1)            (3.8)
       Loan to Non-Depository               2.8          0.1            0.0                 0.2              0.3
                                                        (0.2)          (0.1)               (0.3)            (0.4)
     Fed Funds Sold                         0.1          1.4            1.6                 0.2              0.0
                                                        (3.1)          (3.3)               (1.0)            (0.1)
     Reverse Repo                           1.2          0.0            0.0                 0.0              0.0
                                                        (0.0)          (0.0)               (0.0)            (0.0)

                                                           27



                           Electronic copy available at: https://ssrn.com/abstract=4387676
                                Panel B: Bank Liability Composition – 2022Q1
                                             (1)            (2)         (2)              (3)          (4)
                                          Aggregate   Full Sample      Small      Large (non GSIB)   GSIB
                                                                    (0, 1.384B)      [1.384B, )

Total Liability                             90.5           89.8        89.8              89.9        86.9
                                                           (3.2)       (3.3)           (2.7)         (4.9)
 Domestic Deposit                           76.6           86.8        87.1              85.7        79.9
                                                           (5.3)       (5.2)           (5.1)         (7.7)
   Insured Deposit                          41.1           62.7        64.6              53.0        44.9
                                                           (12.3)     (11.4)           (11.9)        (16.8)
   Uninsured Deposit                        37.4           23.3        21.7              32.0        24.4
                                                           (11.3)     (10.4)           (11.4)        (18.5)
   Uninsured Time Deposits                   1.8            3.6        3.8               3.0          0.8
                                                           (3.0)       (3.0)           (2.7)         (1.6)
   Uninsured Long-Term Time Deposits         0.4            0.8        0.9               0.6          0.1
                                                           (1.0)       (1.0)           (0.7)         (0.3)
   Uninsured Short-Term Time Deposits        1.3            2.6        2.7               2.3          0.7
                                                           (2.4)       (2.4)           (2.1)         (1.5)
 Foreign Deposit                             6.5            0.0        0.0               0.0          0.0
                                                           (0.0)       (0.0)           (0.0)         (0.0)
 Fed Fund Purchase                           0.1            0.0        0.0               0.0          0.0
                                                           (0.0)       (0.0)           (0.0)         (0.0)
 Repo                                        0.6            0.3        0.2               0.5          0.3
                                                           (0.7)       (0.7)           (0.9)         (0.6)
 Other Liability                             2.3            2.3        2.1               3.0          4.3
                                                           (2.8)       (2.7)           (2.8)         (3.4)
Total Equity                                 9.5           10.2        10.2              10.1        13.1
                                                           (3.2)       (3.3)           (2.7)         (4.9)
 Common Stock                                0.2            0.4        0.4               0.2          0.9
                                                           (0.6)       (0.6)           (0.5)         (1.1)
 Preferred Stock                             0.1            0.0        0.0               0.0          0.0
                                                           (0.0)       (0.0)           (0.0)         (0.0)
 Retained Earning                            4              6.8        7.0               5.7          7.6
                                                           (4.0)       (4.1)           (3.2)         (5.4)




                                                      28



                       Electronic copy available at: https://ssrn.com/abstract=4387676
                          Figure A1: Aggregate Asset and Liabilities of US Banks
This figure plots the composition of aggregate total assets and liabilities of US banks as of 2022:Q1 in trillions
of dollars (see also Table A1). On the asset side bank had about $24 trillion of assets as of 2022:Q1. Of these
Cash constitutes about 14% of the aggregate bank assets. Security that includes bank investments in US
Treasuries, RMBS, CMBS, ABS, and other securities accounts for about 25% of the aggregate bank assets. Real
Estate Loan are the residential and commercial loans and other real estate loans that account for about 22% of
the aggregate bank assets. Other Loan are commercial and industrial loans, consumer loans, loans to non-
depository institutions, and agricultural loans that account for about 20% of aggregate bank assets. Other Assets
account for the reminder of bank assets. On the liability side, Insured Deposits account for about 41% of total
bank funding. Uninsured Deposits account for about 37% of total bunk funding and amount to about $9 trillion.
Other includes other loans and liabilities. Equity accounts for about 9.5% of total bank liabilities. Data Sources:
Bank Call reports.




                    Total Assets (Trillion)

                                                     Real
                                                                        Other          Other
                     Cash       Security             Estate
                                                                        Loan           Asset
                                                     Loan



                0                   6                   12                  18                  24




                                                        29



                        Electronic copy available at: https://ssrn.com/abstract=4387676
                Figure A2: Full Set of Insolvent Banks if All Uninsured Depositors Run
This figure plots the full set of “insolvent” banks. A bank is considered insolvent if the mark-to-market value of
its assets – after paying all uninsured depositors -- is insufficient to repay all insured deposits. On the y-axis we
plot mark-to-market losses as a percentage of initial bank asset value. On the x-axis we plot uninsured deposits
as a percentage of mark-to-market bank’s asset value. The assets are based on bank call reports as of 2022:Q1,
and banks with larger asset size are marked with bigger dots. Banks in the top right corner, where Silicon Valley
Bank is, have the most severe asset losses and the largest runnable uninsured deposits to mark-to-market assets.
The red dots correspond to the 10 largest insolvent banks plotted in Figure 5. Data Sources: Bank Call reports
and various ETF and indices price data as described in the main text.




                                                         30



                       Electronic copy available at: https://ssrn.com/abstract=4387676
  Figure A3: Distribution of Bank Equity to Asset Ratio (With & Without “Marking to Market”)
This figure plots the histograms (density) of equity to asset ratios calculated based on 2022:Q1 balance sheets
and mark-to-market values using various ETFs and indices according to the method described in the main text
(Panel a) and equity to asset ratio against bank size (Panel b). The reference lines in Panel (a) indicate Silicon
Valley Bank’s (SBV) values. Silicon Valley Bank’s equity to asset ratio 6.7% based on its 2022Q1 balance
sheet. Its equity to mark-to-market asset ratio is -10.7%. The red and the gray lines are at the 10th and 7th
percentiles, respectively. In Panel (b), the decline at the right-end starts around log asset value of 24, which is
about $26B. Data Sources: Bank Call reports and various ETF and indices price data as described in the main
text.




                     (a) Histogram                                     (b) Equity to Asset by Size




                                                        31



                       Electronic copy available at: https://ssrn.com/abstract=4387676
" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
