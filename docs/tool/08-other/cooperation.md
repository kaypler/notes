# 协作工具

## Jira
1. 查看我未完成的任务<br>
`assignee = currentUser() AND resolution = Unresolved AND type = Task ORDER BY updated DESC`

2. 查看与我相关的版本<br>
`fixVersion in (XXX-UAT-230919, XXX-Live-230919) AND (watcher in (currentUser()) OR assignee = currentUser() OR developer = currentUser() OR "People Involved" in (currentUser()))`

3. 查看最近三个月我未修复的缺陷<br>
`type = bug AND status not in (Closed, Done, Testing) AND (watcher in (currentUser()) OR assignee = currentUser() OR developer = currentUser() OR "People Involved" in (currentUser())) AND createdDate >= startOfMonth(-3) ORDER BY created ASC`
