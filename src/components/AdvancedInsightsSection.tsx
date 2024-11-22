import { DemoResponse } from "@/lib/InsightsResponseTypes";
import {
  isNonEmptyArray,
  isNonEmptyObject,
  toHumanReadable,
} from "@/lib/utils";
import { Users, Calendar, DollarSign } from "lucide-react";

export default function AdvancedInsightsSection({
  advancedInsights,
}: {
  advancedInsights: DemoResponse["data"];
}) {
  return (
    <>
      <section>
        <div className="mb-4">
          <h3 className="text-xl font-medium">
            {advancedInsights?.primaryInsight?.key}
          </h3>
          <p className="text-base">{advancedInsights?.primaryInsight?.value}</p>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
          {advancedInsights?.additionalInsights?.map((insight, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-medium">{insight.key}</h3>
              <p className="text-sm">{insight.value}</p>
            </div>
          ))}
        </div>
      </section>
      {isNonEmptyArray(advancedInsights?.actionItems) && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">Action Items</h2>
          <ul className="space-y-2">
            {advancedInsights?.actionItems?.map((item, index) => (
              <li key={index} className="mb-2">
                <div className="flex items-center justify-between">
                  <span className="text-base">{item.action}</span>
                  <span
                    className={`ml-2 rounded-full px-2 py-1 text-xs font-medium ${
                      item.priority === "High"
                        ? "bg-destructive text-destructive-foreground"
                        : item.priority === "Medium"
                        ? "bg-warning text-warning-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {item.priority}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Due: {item.due_date}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
      {isNonEmptyArray(advancedInsights?.keyInformation?.key_terms) && (
        <section className="py-4">
          {/* <h3 className="text-xl font-medium flex items-center gap-2 mb-2">
              <Book className="h-5 w-5" />
              Key Terms
            </h3> */}

          {advancedInsights?.keyInformation?.key_terms?.map((term, index) => (
            <div key={index} className="mb-2 py-2">
              <p className="text-base">
                <strong>{term.term}:</strong> {term.description}
              </p>
            </div>
          ))}
        </section>
      )}
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        {isNonEmptyArray(advancedInsights?.keyInformation?.parties) && (
          <div>
            <h3 className="text-xl font-medium flex items-center gap-2 mb-2">
              <Users className="h-5 w-5" />
              Parties
            </h3>
            {advancedInsights?.keyInformation?.parties?.map((party, index) => (
              <div key={index} className="mb-2">
                <p className="text-base">
                  <strong>{party.name}</strong> ({party.role})
                </p>
                {party.identifiers.map((identifier, i) => (
                  <p key={i} className="text-sm">
                    {identifier.type}: {identifier.value}
                  </p>
                ))}
              </div>
            ))}
          </div>
        )}
        {/* <h2 className="text-2xl font-semibold mb-2">
          Key Information
        </h2> */}
        {isNonEmptyObject(advancedInsights?.keyInformation?.dates) && (
          <div>
            <h3 className="text-xl font-medium flex items-center gap-2 mb-2">
              <Calendar className="h-5 w-5" />
              Dates
            </h3>
            {Object.entries(advancedInsights?.keyInformation?.dates || {}).map(
              ([key, value]) =>
                value && (
                  <p key={key} className="text-base">
                    <strong>{toHumanReadable(key)}:</strong> {value}
                  </p>
                )
            )}
          </div>
        )}
        {isNonEmptyObject(advancedInsights?.keyInformation?.amounts) && (
          <div>
            <h3 className="text-xl font-medium flex items-center gap-2 mb-2">
              <DollarSign className="h-5 w-5" />
              Amounts
            </h3>
            {Object.entries(advancedInsights?.keyInformation?.amounts).map(
              ([key, value]) =>
                value !== null && (
                  <p key={key} className="text-base">
                    <strong>{key}:</strong> {value}
                  </p>
                )
            )}
          </div>
        )}
      </section>
    </>
  );
}
