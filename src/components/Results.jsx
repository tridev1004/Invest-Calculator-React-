import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const ResultsData = calculateInvestmentResults(input);
  const initialInvestment =
    ResultsData[0].valueEndOfYear -
    ResultsData[0].interest -
    ResultsData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Captial</th>
        </tr>
      </thead>
      <tbody>
        {ResultsData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;

            const totalAmountINvested=yearData.valueEndOfYear - totalInterest
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountINvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
