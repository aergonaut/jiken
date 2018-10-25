module Types
  class ServiceStatusType < Types::BaseEnum
    value "OPERATIONAL",
      description: "A Service is operational if there are no open incidents."
    value "IMPACTED",
      description: "A Service is impacted if there is an open incident that has not yet received a fix."
    value "MONITORING",
      description: "A Service is montioring if there are incidents that have received a fix but are being monitored for further issues."
  end
end
