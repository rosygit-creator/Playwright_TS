# Specs

This is a directory for test plans.





# to run nightly job from codebuild
1. Create a ./buildspec.yml file 
2. Create a AWS Codebuild project: playwright-nightly-tests
2. Create a s3 bucket to upload the playwright test runs report else it is lost after test run : playwright-reports-ra1
3. add code in ./buildspec.yml:
    3.1 # Upload HTML report to S3 (recommended)
    3.2 # Build report URL
4. Setup slack webhook to receive messages in #slack
5. Use Amazon EventBridge (cron scheduler) to trigger CodeBuild.


<!-- Notes:
Codebuild project name: playwright-nightly-tests
Service role: codebuild-pw-nightly-tests-service-role-ra1
in AWS, Artifcats-- name should be same as $REPORT_DIR in buildspec.yml (here: playwright-report-nightly)
s3 bucket name: playwright-reports-ra1 -->

